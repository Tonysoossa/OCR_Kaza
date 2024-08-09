import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import logements from "../data/logements.json";
import Slider from "../components/Slider";
import Collapse from "../components/Collapse";
import Host from "../components/Host";
import Rating from "../components/Rating";
import Tags from "../components/Tags";

const HousingPage = () => {
  // Recup l'ID du logement depuis param d'URL
  const { id } = useParams();
  const navigate = useNavigate();
  const logement = logements.find((logement) => logement.id === id);

  useEffect(() => {
    if (!logement) {
      navigate("/404");
    }
  }, [logement, navigate]);

  if (!logement) {
    return null;
  }

  return (
    <div className="housing-sheet">
      <Slider images={logement.pictures} alt={logement.title} />

      <div className="housing-info">
        <div className="housing-details">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <Tags tags={logement.tags} />
        </div>

        <div className="host-ratings">
          <Rating rating={parseInt(logement.rating)} />
          <Host host={logement.host} />
        </div>
      </div>

      <div className="housing-collapses">
        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>

        <Collapse title="Équipements">
          <ul>
            {logement.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
};

export default HousingPage;
