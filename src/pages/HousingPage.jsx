import { useParams } from "react-router-dom";



const HousingPage = () => {
  const { id } = useParams();
  return id;
};

export default HousingPage;
