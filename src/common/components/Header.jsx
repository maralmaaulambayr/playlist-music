import "./Header.css";
import { BackIcon, ForwardIcon } from "../../assets/icons";
import { AvatarContainer } from "./AvatarContainer";
import { FaSearch } from "react-icons/fa";
import { Outlet } from "react-router";

export const Header = () => {
  return (
    <>
      <header className="flex justify-between">
        <div className="flex gap-20">
          <BackIcon className="back" />
          <ForwardIcon className="back" />
        </div>
        <div className="search-bar">
          <FaSearch className="search" />
          <input type="text" placeholder="Artists, songs, or podcasts" />
        </div>
        <AvatarContainer />
      </header>
      <Outlet />
    </>
  );
};
