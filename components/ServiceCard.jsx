
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ServiceCard({
  number,
  title,
  description,
  image,
}) {
  return (
    <article className="service-row">
      <span className="service-number">{number}</span>

      <div className="service-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className="service-image-wrapper">
        <img src={image} alt={title} className="service-image" />
      </div>

      <Link href="#contact" className="service-link">
        Explore service
        <ArrowUpRight size={17} />
      </Link>
    </article>
  );
}
