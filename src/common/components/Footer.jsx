import "./Footer.css";
import { FaStepBackward } from "react-icons/fa";
import { FaStepForward } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { Outlet } from "react-router";

export const Footer = () => {
  return (
    <>
      <div className="footer-con">
        <div className="play-btn-con">
          <FaStepBackward className="play-btns" />
          <FaPlayCircle className="play-btns" />
          <FaStepForward className="play-btns" />
        </div>
      </div>
      <Outlet />
    </>
  );
};
