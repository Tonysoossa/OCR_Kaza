import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
const Error404Page = () => {
  const navigatation = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigatation("/");
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigatation]);

  return (
    <div className="errorPage">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </div>
  );
};

export default Error404Page;
