import { Link, useLocation } from "react-router-dom";

import logo from "../images/logo-kasa.svg";
import logoFooter from "../images/logo-kasa-white.svg";

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="background">
      <header>
        <div className="header-content">
          <Link to="/">
            <img src={logo} alt="logo Kasa" className="logo" />
          </Link>
          <nav>
            <ul>
              <li>
                <Link
                  to="/"
                  className={location.pathname === "/" ? "active" : ""}
                >
                  Accueil
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className={location.pathname === "/about" ? "active" : ""}
                >
                  À Propos
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer>
        <img src={logoFooter} alt=" logo Kasa" className="logo-footer" />
  
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    </div>
  );
};

export default Layout;
