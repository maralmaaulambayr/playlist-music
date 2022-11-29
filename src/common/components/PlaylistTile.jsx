import "./MainContent.css"
import { Songs } from "./Songs";

export const PlaylistTile = ({
  }) => {
    return (
      <div className="overflow-hidden flex playlist-tile-container transparent-background gap-20 audioList">
        <div className="songs-con">
          {Songs &&
           Songs.map((song,index)=>(
            <div className="songs" key={song.id}>
            <div className="count">{ index+1 }</div>
            <div className="song">
              <div className="img-con">
                <img src={song?.imgSrc} alt="" className="thumbnail-sm" />
              </div>
              <div className="section">
                <p className="song-name">{song.songName} <span className="spanArtist">
                  {song.artist}
                </span>
                </p>
              </div>
            </div>
          </div>
           ))
           }
        </div>
        
      </div>
    );
  };