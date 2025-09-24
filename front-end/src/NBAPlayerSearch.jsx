import React, { useState } from "react";

class Player {
  //Initializes the player class by parsing through JSON object.
  constructor(playerData) {
    this.id = playerData.id;
    this.firstName = playerData.first_name;
    this.lastName = playerData.last_name;
    this.height = playerData.height;
    this.weight = playerData.weight;
    this.position = playerData.position;
    this.jerseyNumber = playerData.jersey_number;
    this.college = playerData.college;
    this.country = playerData.country;
    this.draftYear = playerData.draft_year;
    this.draftRound = playerData.draft_round;
    this.draftNumber = playerData.draft_number;
    this.team=playerData.team.full_name;
    this.teamabbreviation = playerData.team.abbreviation; 
  }
}



function NBAPlayerSearch() {
  const [search, setSearch] = useState("");
  const [players, setPlayers] = useState([]);

  //Returns an array of players returned by the JSON search.
  function parsePlayers(jsonString) {
    return jsonString.data.map(player => new Player(player));
  }

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `/nbaplayer?search=${encodeURIComponent(search)}`
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
    <div className="p-4">
      <h1 className="text-xl font-bold">NBA Player Search</h1>
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

      <div className="players">
        {players.map((p) => (
          <div key={p.id} className={`player-card nba-${p.teamAbbreviation} border p-2 my-2`}>
            <div className="player-title">
              <h2>{p.firstName} {p.lastName}</h2>
            </div>
            <div className="player-attributes">
              <div>
                Team: {p.team} ({p.teamabbreviation})
              </div>
              <div>
                Height/Weight: {p.height}, {p.weight} lbs
              </div>
              <div>
                Position: {p.position}
              </div>
              <div>
                Jersey Number: {p.jerseyNumber}
              </div>
              <div>
                School: {p.college}
              </div>
              <div>
                Country: {p.country}
              </div>
              <div>
                Drafted: {p.draftYear} (R{p.draftRound},P{p.draftNumber})
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NBAPlayerSearch;
