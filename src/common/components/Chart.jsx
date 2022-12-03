import { Link } from "react-router-dom";
import image from "../../assets/images/pop.jpg";
import "./Chart.css";

export const Chart = () => {
  return (
    <Link to={"/Playlist"}>
      <div className="chart-con">
        <img src={image}></img>
        <h5>Top Songs - Global</h5>
        <p>Your weekly update of the most played tracks</p>
      </div>
    </Link>
  );
};
