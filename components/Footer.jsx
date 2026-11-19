
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="brand">
              Breeze<span>Works.</span>
            </Link>
            <p>Comfort, carefully delivered.</p>
            <p className="footer-description">
              Thoughtful air conditioning solutions for
              residential and commercial spaces.
            </p>
          </div>

          <div className="footer-links">
            <h4>Explore</h4>
            <Link href="#home">Home</Link>
            <Link href="#about">About</Link>
            <Link href="#services">Services</Link>
            <Link href="#contact">Contact</Link>
          </div>

          <div className="footer-links">
            <h4>Get Started</h4>
            <Link href="/booking">Book a Service</Link>
            <Link href="#services">Explore Services</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 BreezeWorks. All rights reserved.</p>
          <Link href="/booking">
            Let's talk about your AC needs
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
