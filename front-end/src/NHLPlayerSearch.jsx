import React, { useState } from "react";

class Player {
  //Initializes the player class by parsing through JSON object.
  constructor(playerData) {
    this.id = playerData.id;
    this.firstName = playerData.first_name;
    this.lastName = playerData.last_name;
    this.height = playerData.height_in_inches;
    this.weight = playerData.weight_in_pounds;
    this.position = playerData.position_code;
    this.shoots_catches = playerData.shoots_catches;
    this.birth_place = playerData.birth_place;
    this.birth_date = playerData.birth_date;
    this.team = playerData.teams[0].full_name;
    this.teamabbreviation = playerData.teams[0].tricode; 
  }
}



function NHLPlayerSearch() {
  const [search, setSearch] = useState("");
  const [players, setPlayers] = useState([]);

  //Returns an array of players returned by the JSON search.
  function parsePlayers(jsonString) {
    return jsonString.data.map(player => new Player(player));
  }

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `/nhlplayer?search=${encodeURIComponent(search)}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch player");
      }
      const data = await response.json();
      setPlayers(parsePlayers(data));
    } catch (error) {
      console.error("Error fetching player:", error);
    }
  };

  return (
    <div className="nhl-ps-header">
      <h1 className="text-xl font-bold">NHL Player Search</h1>
      <div className="search-bar-ps">
        <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Enter player name"
        className="border p-2 m-2"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2">
        Search
      </button>
      </div>
      

      <div className="players">
        {players.map((p) => (
          <div key={p.id} className={`player-card nhl-${p.teamAbbreviation} border p-2 my-2`}>
            <div className="player-title">
              <h2>{p.firstName} {p.lastName}</h2>
            </div>
            <div className="player-attributes">
              <div>
                Born: {p.birth_date} in {p.birth_place}
              </div>
              <div>
                Team: {p.team} ({p.teamabbreviation})
              </div>
              <div>
                Height/Weight: {p.height} inch., {p.weight} lbs
              </div>
              <div>
                Position: {p.position}
              </div>
              <div>
                Shoots/Catches: {p.shoots_catches}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NHLPlayerSearch;
