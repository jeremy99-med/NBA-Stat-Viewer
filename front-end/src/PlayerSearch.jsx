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
        <div className="mb-4 flex gap-2">
            <button
                onClick={() => setSelectedSport("NFL")}
                className={`bg-blue-500 text-white px-4 py-2 rounded`}
            >
                NFL
            </button>
            <button
                onClick={() => setSelectedSport("NBA")}
                className={`bg-blue-500 text-white px-4 py-2 rounded`}
            >
                NBA
            </button>
            <button
                onClick={() => setSelectedSport("MLB")}
                className={`bg-blue-500 text-white px-4 py-2 rounded`}
            >
                MLB
            </button>
            <button
                onClick={() => setSelectedSport("NHL")}
                className={`bg-blue-500 text-white px-4 py-2 rounded`}
            >
                NHL
            </button>
        </div>
        <div>
            {render_sport_search()}
        </div>
    </div>
  );
}

export default PlayerSearch;