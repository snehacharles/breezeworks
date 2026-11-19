
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        <div className="hero-content">
          <p className="eyebrow">
            AIR CONDITIONING SPECIALISTS
          </p>

          <h1>
            Comfort,
            <br />
            carefully <span>delivered.</span>
          </h1>

          <p className="hero-description">
            Dependable AC repair, servicing and installation
            for the spaces that matter most. Professional
            cooling solutions for homes and businesses.
          </p>

          <div className="hero-actions">
            <Link href="#booking" className="primary-btn">
              Book a Service <ArrowUpRight size={17} />
            </Link>

            <Link href="#services" className="secondary-btn">
              Explore Services <ArrowRight size={17} />
            </Link>
          </div>

          <div className="hero-note">
            <span className="note-line"></span>
            <p>Residential & Commercial AC Solutions</p>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <img
            src="/images/technician.png"
            alt="BreezeWorks AC technician servicing an air conditioner"
            className="hero-image"
          />

          <div className="image-caption">
            <span>01 / PROFESSIONAL SERVICE</span>
            <span>BreezeWorks.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
