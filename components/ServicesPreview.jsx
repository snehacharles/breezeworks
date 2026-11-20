
import ServiceCard from "./ServiceCard";

const services = [
  {
    number: "01",
    title: "AC Repair",
    description:
      "Reliable solutions for unexpected AC breakdowns.",
    image: "/images/ac-repair.png",
  },
  {
    number: "02",
    title: "AC Servicing",
    description:
      "Thorough cleaning for better cooling performance.",
    image: "/images/ac-servicing.png",
  },
  {
    number: "03",
    title: "AC Installation",
    description:
      "Professional installation for your space.",
    image: "/images/ac-installation.png",
  },
  {
    number: "04",
    title: "Gas Refilling",
    description:
      "Restore cooling with proper gas checking.",
    image: "/images/gas-refilling.png",
  },
  {
    number: "05",
    title: "AC Maintenance",
    description:
      "Regular care for reliable AC performance.",
    image: "/images/ac-maintenance.png",
  },
  {
    number: "06",
    title: "Commercial AC",
    description:
      "Cooling solutions for business environments.",
    image: "/images/commercial-ac.png",
  },
];

export default function ServicesPreview() {
  return (
    <section className="services-section" id="services">
      <div className="services-container">

        <div className="services-heading">
          <div>
            <p className="eyebrow">OUR SERVICES</p>

            <h2>
              Comfort for every
              <br />
              <span>kind of space.</span>
            </h2>
          </div>

          <p className="services-intro">
            From everyday servicing to complete cooling
            installations, we offer professional solutions
            for homes and commercial spaces.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard
              key={service.number}
              {...service}
            />
          ))}
        </div>

        <div className="services-bottom">
          <p>Looking for the right cooling solution?</p>

          <a href="#booking">
            Book a Service
          </a>
        </div>

      </div>
    </section>
  );
}
