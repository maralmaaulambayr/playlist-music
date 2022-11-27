import {IoLibrary} from "react-icons/io5"
import {MdHomeFilled, MdSearch} from "react-icons/md"
import "./LeftBar.css"

export const LeftBar = ({ children }) => {
    return (
      <aside className="flex justify-center">
        <div className="container">
          <div className="top-links">
            <div className="logo">
                <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
                alt="spotify"
                ></img>
            </div>
            <ul>
                <li>
                    <MdHomeFilled />
                    <span>Home</span></li>
                <li>
                    <MdSearch />
                    <span>Search</span></li>
                <li>
                    <IoLibrary />
                    <span>Your library</span></li>
            </ul>
          </div>
        </div>
      </aside>
    );
  };