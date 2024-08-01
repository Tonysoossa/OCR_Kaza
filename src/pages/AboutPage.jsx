import Banner from "../components/Banner";
import Collapse from "../components/Collapse";

import aboutBannerImg from "../images/banner-kasa-about.png";

const respectText = `La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
comportement discriminatoire ou de perturbation du voisinage
entrainera une exclusion de notre plateforme.`;

const fiabilityText = `  Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.`;

const serviceText = `  Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite. N'hésitez pas à nous contacter si vous avez la
            moindre question.`;

const securityText = `La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.`;

const AboutPage = () => {
  return (
    <>
      <Banner
        imageUrl={aboutBannerImg}
        alt="Paysage de montagnes"
        // overlayOpacity={0.4}
       
      />
      <div className="about-benefits">
        <Collapse title="Fiabilité">
          <p children={fiabilityText}></p>
        </Collapse>
        <Collapse title="Respect">
          <p children={respectText}></p>
        </Collapse>

        <Collapse title="Service">
          <p children={serviceText}></p>
        </Collapse>

        <Collapse title="Sécurité">
          <p children={securityText}></p>
        </Collapse>
      </div>
    </>
  );
};

export default AboutPage;
