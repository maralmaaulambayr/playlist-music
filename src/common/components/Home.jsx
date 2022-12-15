import { Outlet } from "react-router";
import { Chart } from "./Chart";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <div className="home-page-con">
        <div>
          <h3>Try something else</h3>
          <div className="chart-container">
            <Chart />
          </div>
        </div>
        <div className="album-cn">
          <h3>Albums</h3>
          <div className="chart-container2">
            <Chart />
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};
