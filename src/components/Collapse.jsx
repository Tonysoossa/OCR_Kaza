import { useState } from "react";

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={isOpen ? "full-collapse" : "closed-collapse"}>
        <div className="opened-collapse" onClick={handleToggle}>
          <h2>{title}</h2>
          <i
            className={`fa-solid fa-chevron-up fa-1xl ${
              isOpen ? "rotate-chevron" : ""
            }`}
          ></i>
        </div>
        <div className={`collapse-content ${isOpen ? "show-content" : ""}`}>
          <p>{children}</p>
        </div>
      </div>
    </>
  );
};

export default Collapse;
