import Header from "./Header";
import Searchbar from "./Searchbar";
import SongsList from "./SongsList";
import { useEffect, useState } from "react";

const Home = () => {
  const [songs, setSongs] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  const fetchSongs = async () => {
    try {
      const res = await fetch("https://cms.samespace.com/items/songs");
      const data = await res.json();
      console.log(data);
      setSongs(data.data);
      filteredSongs(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  //   const findSongs = (value) => {
  //     setSearchVal(value);
  //     if (value.length === 0) {
  //       setSongs(fetchSongs());
  //     } else {
  //       const filteredSongs = songs.filter((song) =>
  //         song.name.toLowerCase().includes(value.toLowerCase())
  //       );
  //       console.log(filteredSongs);
  //       setSongs(filteredSongs);
  //     }
  //   };

  return (
    <>
      <Header />
      <div className="home">
        <div>
          <Searchbar searchVal={searchVal} />
          <SongsList songs={songs} />
        </div>
      </div>
    </>
  );
};

export default Home;
