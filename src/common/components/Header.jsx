import "./Header.css"
import { BackIcon, ForwardIcon } from "../../assets/icons";
import { AvatarContainer } from "./AvatarContainer";
import {FaSearch} from "react-icons/fa"
import {CgProfile} from "react-icons/cg"

export const Header = () => {
  return (
    <header className="flex justify-between">
            <div className="flex gap-20">
              <BackIcon />
              <ForwardIcon />
            </div>
            <div className="search-bar">
                <FaSearch className="search" />
                <input type="text" placeholder="Artists, songs, or podcasts" />
            </div>
            <AvatarContainer /> 
    </header>
  );
};