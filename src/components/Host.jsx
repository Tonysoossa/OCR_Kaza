const Host = ({ host }) => {
  const [firstName, lastName] = host.name.split(" ");
  return (
    <div className="host">
      <div className="host-name">
        <span>{firstName}</span>
        <span>{lastName}</span>
      </div>
      <img src={host.picture} alt={host.name} className="host-picture" />
    </div>
  );
};

export default Host;
