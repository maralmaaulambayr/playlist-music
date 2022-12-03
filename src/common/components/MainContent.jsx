import { useEffect, useState } from "react";
import { Header } from "./Header";
import axios from "axios";
import "./MainContent.css";
import { LeftBar } from "./LeftBar";
import { Footer } from "./Footer";

export const MainContent = ({children}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://6375fb74b5f0e1eb85fed196.mockapi.io/api/v1/users/9/playlists`
      );

      console.log(response.data);
      setData(response.data);
    })();
  }, []);

  const addPlaylist = async () => {
    const res = await axios.post(
      `https://6375fb74b5f0e1eb85fed196.mockapi.io/api/v1/users/9/playlists`,
      [...data, { id: "15", songs: [], totalVote: 30, listName: "" }]
    );
    console.log(res);
  };
  const updatePlaylist = async () => {
    const res = await axios.put(
      `https://6375fb74b5f0e1eb85fed196.mockapi.io/api/v1/users/9/playlists`,
      { songs: [{ name: "Marla" }] }
    );
    console.log(res);
  };

  return (
    <>
      <div className="grid-container">
        <LeftBar />
        <div className="flex justify-center header-container">
          <div className="flex  column w-full">
            <Header></Header>
           {children}
          </div>
        </div>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </>
  );
};

 