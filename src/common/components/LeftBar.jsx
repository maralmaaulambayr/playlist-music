import { IoLibrary } from "react-icons/io5";
import { MdHomeFilled, MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";

import "./LeftBar.css";

export const LeftBar = () => {
  return (
    <aside className="flex justify-center">
      <div className="container">
        <div className="top-links">
          <Link to={"/"}>
            <div className="logo">
              <img
                src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
                alt="spotify"
              ></img>
            </div>
          </Link>

          <ul>
            <Link className="home-link" to={"/Home"}>
              <li>
                <MdHomeFilled className="left-icon" />
                <span>Home</span>
              </li>
            </Link>
            <a>
              <li>
                <MdSearch className="left-icon" />
                <span>Search</span>
              </li>
            </a>
            <a>
              <li>
                <IoLibrary className="left-icon" />
                <span>Your library</span>
              </li>
            </a>
          </ul>
        </div>
      </div>
    </aside>
  );
};
