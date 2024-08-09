import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import HousingPage from "../pages/HousingPage";
import Error404Page from "../pages/Error404Page";
import Layout from "./Layout";

function AppRouter() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />

          <Route path="/housing/:id" element={<HousingPage />} />

          <Route path="*" element={<Error404Page />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default AppRouter;
