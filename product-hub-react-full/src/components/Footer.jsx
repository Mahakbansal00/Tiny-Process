import React, { useState } from "react";


export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.trim() !== "") {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="footer">
      {/* Top Branding */}
      <div className="footer-top">
        <h2 className="footer-logo">Product Hub</h2>
        <p className="footer-tagline">The new home for your digital goods</p>
      </div>

      {/* Subscribe Section */}
      <div className="footer-subscribe">
        <h3>Join our mailing list</h3>
        <p>Get notified about new products as soon as they drop</p>
        {subscribed ? (
          <p className="subscribed-message">🎉 You've been subscribed!</p>
        ) : (
          <div className="subscribe-form">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              aria-label="Email Address"
            />
            <button onClick={handleSubscribe}>Subscribe</button>
          </div>
        )}
      </div>

      {/* Footer Links */}
      <div className="footer-links">
        <div className="footer-column">
          <h4>Product Hub</h4>
          <div className="footer-links-list">
            <a href="#explore">Explore</a>
            <a href="#contact">Contact Us</a>
          </div>
        </div>

        <div className="footer-column">
          <h4>Account</h4>
          <div className="footer-links-list">
            <a href="#activate">Activate Membership</a>
            <a href="#signin">Sign In</a>
            <a href="#reset">Reset Password</a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Product Hub. All rights reserved.</p>
      </div>
    </footer>
  );
}
