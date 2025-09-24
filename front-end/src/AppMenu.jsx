import PlayerSearch from "./PlayerSearch";
import { useNavigate } from "react-router-dom";


function AppMenu() {
  const navigate = useNavigate();
  
  return (
    <div>
        <h2 className="text-xl mb-4">Select an activity</h2>
            <button
                onClick={() => navigate("/player-search")}
                className="bg-blue-500 text-white px-4 py-2 rounded mb-2"
            >
                Player Search
            </button>
    </div>
  );
}

export default AppMenu;