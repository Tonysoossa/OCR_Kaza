import "../sass/banner.scss";

const Banner = ({ title, imageUrl, overlayOpacity = 0.6, alt }) => {
  return (
    <div className="banner">
      <img src={imageUrl} alt={alt} />
      <div
        className="overlay"
        style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}
      ></div>
      {title && <h1 className="banner-title">{title}</h1>}
    </div>
  );
};

export default Banner;
