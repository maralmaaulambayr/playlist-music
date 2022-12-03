import "./MainContent.css";
import { PlaylistTile } from "./PlaylistTile";
import image from "../../assets/images/pop.jpg";
import { FaPlayCircle } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export const Playlist = () => {
  return (
    <>
      <div className="flex column w-full">
        <div className="playlists-container">
          <div className="playlist">
            <div className="image">
              <img src={image}></img>
            </div>
            <div className="details">
              <span className="type">PLAYLIST</span>
              <h1 className="title">Top Songs-Global</h1>
              <p className="description">
                Your weekly update of the most played tracks right now - Global.
              </p>
            </div>
          </div>
          <div className="btn-con">
            <FaPlayCircle className="play-btn" />
            <FaHeart className="fav-btn" />
            <p className="other">...</p>
          </div>

          <div className="list">
            <ul className="list-con">
              <li>
                <p>#</p>
              </li>
              <li>
                <p>TITLE</p>
              </li>
              <li className="artist">
                <p>ARTIST</p>
              </li>
            </ul>
            <div className="tracts">
              <PlaylistTile />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
