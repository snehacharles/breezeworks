
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ServiceCard({
  number,
  title,
  description,
  image,
}) {
  return (
    <article
      className="service-card"
      style={{ backgroundImage: `url("${image}")` }}
    >
      <div className="service-overlay">
        <span className="service-number">{number}</span>

        <div className="service-card-content">
          <h3>{title}</h3>
          <p>{description}</p>

          <Link href="#contact" className="service-link">
            Explore service
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </article>
  );
}
