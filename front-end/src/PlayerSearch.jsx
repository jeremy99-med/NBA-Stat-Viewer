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
            <div className="player-search-sports-header">
                <h2>Select a sport:</h2>
            </div>
            <div className="player-search-sports-options">
                <div className="player-search-sport-nfl">
                <button
                    onClick={() => setSelectedSport("NFL")}
                    className={`player-search-sport-button bg-blue-500 text-white px-4 py-2 rounded`}
                ><span>NFL</span>
                
                </button>
            </div>
            <div className="player-search-sport-nba">
                <button
                        onClick={() => setSelectedSport("NBA")}
                        className={`player-search-sport-button bg-green-500 text-white px-4 py-2 rounded`}
                    >
                    <span>NBA</span>
                </button>
            </div>
            <div className="player-search-sport-mlb">
                <button
                        onClick={() => setSelectedSport("MLB")}
                        className={`player-search-sport-button bg-red-500 text-white px-4 py-2 rounded`}
                    >
                    <span>MLB</span>
                </button>
            </div>
            <div className="player-search-sport-nhl">
                <button
                    onClick={() => setSelectedSport("NHL")}
                    className={`player-search-sport-button bg-yellow-500 text-white px-4 py-2 rounded`}
                >
                    <span>NHL</span>
                </button>
                </div>
            </div>
        </div>
        <div>
            {render_sport_search()}
        </div>
    </div>
  );
}

export default PlayerSearch;