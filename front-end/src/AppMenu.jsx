import PlayerSearch from "./PlayerSearch";
import { useNavigate } from "react-router-dom";


function AppMenu() {
  const navigate = useNavigate();

  return (
    <div className='activity-menu'>
        <div className='activity-title'>
            <h2 className="text-xl mb-4">Select an activity</h2>
        </div>
        <div className="activity-choices">
            <button onClick={() => navigate("/player-search")} className="activity-choice-ps-button bg-blue-500 text-white px-4 py-2 rounded mb-2 flex items-center gap-2">
                <span>Player Search</span>
            </button>

        </div>
    </div>
  );
}

export default AppMenu;