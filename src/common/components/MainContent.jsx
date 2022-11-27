import { useEffect, useState } from "react";
import { Header } from "./Header";
import { PlaylistTile } from "./PlaylistTile";
import axios from "axios";

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
      [...data, { id: "1", songs: [], totalVote: 30, listName: "Zolboo's Emo" }]
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
          {data.map((playlist, index) => (
            <PlaylistTile key={index} listName={playlist.listName} />
          ))}
          <button
            onClick={addPlaylist}
            style={{ background: "#FFFFFF", borderRadius: "40px" }}
          >
            Update Playlist
          </button>
        </div>
      </div>
    </div>
  );
};