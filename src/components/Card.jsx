import logements from "../data/logements.json";
import { Link } from "react-router-dom";

const HousingCard = () => {
  return (
    <section className="housing-display">
      {logements.map((logement) => (
        <Link
          to={`/housing/${logement.id}`}
          key={logement.id}
          className="housing-home"
        >
          <img
            src={logement.cover}
            alt={logement.title}
            className="housing-img-home"
          />
          <h2 className="housing-title-home">{logement.title}</h2>
        </Link>
      ))}
    </section>
  );
};

export default HousingCard;
