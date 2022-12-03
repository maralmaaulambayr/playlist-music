import { Chart } from "./Chart";
import "./Home.css"

export const Home = () => {
  return (
    <>
      <div className="home-page-con">
        <h3>Featured Charts</h3>
        <div className="chart-container">
          {new Array(3).fill(0).map((_, index) => (
            <Chart index={index} />
          ))}
        </div>
        
      </div>
    </>
  );
};
