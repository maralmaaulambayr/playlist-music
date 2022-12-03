import { IoLibrary } from "react-icons/io5";
import { MdHomeFilled, MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./LeftBar.css";

export const LeftBar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    console.log('clicked')
    setIsActive(!isActive);
  };
  return (
    <div className="left-bar-con">
      {console.log(isActive)}
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
              <Link
                className={!isActive ? "active" : "links"}
                to={"/"}
                onClick={handleClick}
              >
                <li>
                  <MdHomeFilled className="left-icon" />
                  <span>Home</span>
                </li>
              </Link> 
              <Link className={isActive ? "active" : "links"} to={"/search"} onClick={handleClick}>
                <li>
                  <MdSearch className="left-icon" />
                  <span>Search</span>
                </li>
              </Link>
              <Link className="links">
                <li>
                  <IoLibrary className="left-icon" />
                  <span>Your library</span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
};
