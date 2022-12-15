import { Link } from "react-router-dom";
import { Albums } from "./Albums";
import "./Chart.css";

export const Album= () => {
  return (
    <>
      {Albums &&
        Albums.map((album) => (
          <Link to={"/Playlist"}>
            <div className="chart-con">
              <div className="img-con">
                <img src={album.imgSrc}></img>
              </div>

              <div className="album">
                <h5>{album.albumName}</h5>
                <p>{album.description}</p>
              </div>
            </div>
          </Link>
        ))}
    </>
  );
};