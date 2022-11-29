import { useEffect, useState } from "react";
import { Header } from "./Header";
import { PlaylistTile } from "./PlaylistTile";
import axios from "axios";
import image from "../../assets/images/pop.jpg"
import "./MainContent.css"
import { FaPlayCircle } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa'


export const MainContent = () => {
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
    <div className="flex justify-center">
      <div className="flex header-container column w-full">
        <Header></Header>
        <div className="playlists-container"></div>

        <div className="playlists-container">
            <div className="playlist">
                <div className="image">
                    <img src={image}></img>
                </div>
                <div className="details">
                    <span className="type">PLAYLIST</span>
                    <h1 className="title">Daily Mix</h1>
                    <p className="description"></p>
                </div>
            </div>
            <div className="btn-con">
              <FaPlayCircle className="play-btn" />
              <FaHeart className="fav-btn" />
              <p className="other">...</p>
            </div>
            
            <div className="list">
              <ul className="list-con">
                <li><p>#</p></li>
                <li><p>TITLE</p></li>
                <li className="artist"><p>ARTIST</p></li>
              </ul>
                <div className="tracts">
                    <PlaylistTile />
                    <button
                    onClick={addPlaylist}
                    style={{ background: "#FFFFFF", borderRadius: "40px" }}
                    >
                    Update Playlist
                    </button> 
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};