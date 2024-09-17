import { useEffect, useState } from "react";

const SongsList = ({ songs }) => {
  return (
    <div className="songs-container">
      {songs.map((song) => {
        return (
          <div className="song-card">
            <img src={song?.url} alt="album" />
            <div className="title-artist">
              <p className="title">{song?.name}</p>
              <span> {song?.artist} </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SongsList;
