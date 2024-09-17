const Searcbar = ({ searchSongs, searchVal }) => {
  return (
    <div>
      <div className="input-container">
        <input
          className="input"
          placeholder="Search a song..."
          // onChange={(e) => searchSongs(e.target.value)}
          value={searchVal}
        />
      </div>
    </div>
  );
};

export default Searcbar;
