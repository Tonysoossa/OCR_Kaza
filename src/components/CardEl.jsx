// NOTE HOTS COMPONENT

export const Host = ({ host }) => {
  return (
    <div className="host">
      <span className="host-name">{host.name}</span>
      <img src={host.picture} alt={host.name} className="host-picture" />
    </div>
  );
};

// NOTE RATING STARS COMPONENT

export const Rating = ({ rating }) => {
  const maxRating = 5;
  const fullStar = <i className="fa-solid fa-star full-star"></i>;
  const emptyStar = <i className="fa-solid fa-star empty-star"></i>;
  return (
    <div className="rating">
     
      {[...Array(maxRating)].map((_, index) => (
        <span key={index}>
          {index < rating ? fullStar : emptyStar}
        </span>
      ))}
    </div>
  );
};

// NOTE Tags component

export const Tags = ({ tags }) => {
  return (
    <div className="tags">
      {tags.map((tag, index) => (
        <span key={index} className="tag">
          {tag}
        </span>
      ))}
    </div>
  );
};
