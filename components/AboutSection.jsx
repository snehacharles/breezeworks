
import Link from "next/link";
import {
  ArrowUpRight,
  Wind,
  Home,
  MessageCircle,
} from "lucide-react";

const values = [
  {
    number: "01",
    icon: Wind,
    title: "Thoughtful solutions",
    description:
      "Every cooling requirement is different. We focus on understanding the need before suggesting a suitable service.",
  },
  {
    number: "02",
    icon: Home,
    title: "For every space",
    description:
      "From everyday home cooling needs to commercial AC requirements, our services cover different environments.",
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "Clear communication",
    description:
      "We believe customers should understand the service they enquire about and the work being discussed.",
  },
];

export default function AboutSection() {
  return (
    <section className="about-page" id="about">

      

      {/* OUR APPROACH */}
      <div className="about-story">
        <div className="about-story-image">
          <img
            src="/images/about-technician.png"
            alt="Technician inspecting an air conditioner"
          />
        </div>

        <div className="about-story-content">
          <p className="eyebrow">OUR APPROACH</p>

          <h2>
            Comfort begins with
            <span> the right care.</span>
          </h2>

          <p>
            Whether it is an AC that needs attention,
            a new installation or regular maintenance,
            choosing the right service matters.
          </p>

          <p>
            BreezeWorks brings different air conditioning
            services together in one place, making it
            easier to understand your options and send
            an enquiry.
          </p>

          <Link href="#services" className="about-link">
            Discover our services
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>

      {/* RESIDENTIAL & COMMERCIAL */}
      <div className="about-commercial">
        <div className="about-commercial-content">
          <p className="eyebrow">
            RESIDENTIAL & COMMERCIAL
          </p>

          <h2>
            Different spaces.
            <br />
            <span>One focus on comfort.</span>
          </h2>

          <p>
            From individual homes to commercial
            environments, explore AC services suited
            to different cooling needs.
          </p>

          <Link href="#services" className="about-link">
            Explore all services
            <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="about-commercial-image">
          <img
            src="/images/about-commercial.png"
            alt="Modern commercial space with air conditioning"
          />
        </div>
      </div>

      {/* OUR VALUES */}
      <div className="about-values">
        <div className="about-values-heading">
          <p className="eyebrow">WHAT MATTERS TO US</p>

          <h2>
            The principles behind
            <br />
            <span>every interaction.</span>
          </h2>
        </div>

        <div className="about-values-grid">
          {values.map((item) => {
            const Icon = item.icon;

            return (
              <article
                className="about-value-card"
                key={item.number}
              >
                <div className="about-value-top">
                  <span>{item.number}</span>
                  <Icon size={25} strokeWidth={1.5} />
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>

    </section>
  );
}
