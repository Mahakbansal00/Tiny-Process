import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const app = express();
const PORT = 4000;
const JWT_SECRET = "your_jwt_secret_key"; // Change this to a secure key in production

app.use(cors());
app.use(bodyParser.json());

// In-memory user store (replace with DB in production)
const users = [];

// In-memory asset data
const assets = [
  { id: 1, title: "Alien", category: "Aliens", featured: true, img: "https://via.placeholder.com/200" },
  { id: 2, title: "Monster", category: "Monsters", featured: false, img: "https://via.placeholder.com/200" },
  { id: 3, title: "Lion", category: "Animals", featured: false, img: "https://via.placeholder.com/200" },
  { id: 4, title: "Alligator", category: "Animals", featured: false, img: "https://via.placeholder.com/200" },
];

// Middleware to authenticate JWT token
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// Register new user
app.post("/api/register", async (req, res) => {
  const { username, password } = req.body;
  if (users.find(u => u.username === username)) {
    return res.status(400).json({ message: "User already exists" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });
  res.status(201).json({ message: "User registered successfully" });
});

// Login user
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (!user) return res.status(400).json({ message: "Invalid credentials" });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(400).json({ message: "Invalid credentials" });

  const accessToken = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: "1h" });
  res.json({ accessToken });
});

// Get assets with optional search and category filter
app.get("/api/assets", (req, res) => {
  const { search = "", category = "All" } = req.query;
  let filteredAssets = assets;

  if (category !== "All") {
    filteredAssets = filteredAssets.filter(a => a.category === category);
  }
  if (search) {
    filteredAssets = filteredAssets.filter(a => a.title.toLowerCase().includes(search.toLowerCase()));
  }
  res.json(filteredAssets);
});

// Protected route example
app.get("/api/profile", authenticateToken, (req, res) => {
  res.json({ message: `Welcome ${req.user.username}! This is your profile.` });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
