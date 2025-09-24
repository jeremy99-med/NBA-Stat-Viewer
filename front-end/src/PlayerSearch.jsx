import NBAPlayerSearch from "./NBAPlayerSearch";
import NFLPlayerSearch from "./NFLPlayerSearch";
import MLBPlayerSearch from "./MLBPlayerSearch";
import NHLPlayerSearch from "./NHLPlayerSearch";
import { useState } from "react";

function PlayerSearch() {
  const [selectedSport, setSelectedSport] = useState(null);

  const render_sport_search = () => {
    switch (selectedSport) {
      case "NBA":
        return <NBAPlayerSearch />;
      case "NFL":
        return <NFLPlayerSearch />;
      case "NHL":
        return <NHLPlayerSearch />;
      case "MLB":
        return <MLBPlayerSearch />;
    
    }
  }
  
  return (
    <div>
        <div className="player-search-sports mb-4 flex gap-2">
            <div className="player-search-nfl">
                <button
                    onClick={() => setSelectedSport("NFL")}
                    className={`player-search-nfl-button bg-blue-500 text-white px-4 py-2 rounded`}
                >
                NFL
            </button>
            </div>
            <div className="player-search-nba">
                <button
                    onClick={() => setSelectedSport("NBA")}
                    className={`player-search-nba-button bg-green-500 text-white px-4 py-2 rounded`}
                >
                    NBA
                </button>
            </div>
            <div className="player-search-mlb">
                <button
                    onClick={() => setSelectedSport("MLB")}
                    className={`player-search-mlb-button bg-red-500 text-white px-4 py-2 rounded`}
                >
                MLB
                </button>
            </div>
            <div className="player-search-nhl">
                <button
                    onClick={() => setSelectedSport("NHL")}
                    className={`player-search-nhl-button bg-yellow-500 text-white px-4 py-2 rounded`}
                >
                NHL
                </button>
            </div>
        </div>
        <div>
            {render_sport_search()}
        </div>
    </div>
  );
}

export default PlayerSearch;