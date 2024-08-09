import Banner from "../components/Banner";
import Card from "../components/Card";
import homeBannerImg from "../images/banner-kasa-home.png";

const HomePage = () => {
  return (
    <>
      <Banner
        imageUrl={homeBannerImg}
        alt="Paysage"
        title="Chez vous, partout et ailleurs"
      />
      <Card />
    </>
  );
};

export default HomePage;
