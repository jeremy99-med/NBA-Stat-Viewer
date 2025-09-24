import logo from './logo.svg';
import './css/App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppMenu from './AppMenu.jsx';
import PlayerSearch from "./PlayerSearch";


function App() {
   return (
   <Router>
      <div className="">
        <h1 className="">J's Sports App</h1>
        <Routes>
          {/* Home menu page */}
          <Route path="/" element={<AppMenu />} />

          {/* Player search page */}
          <Route path="/player-search" element={<PlayerSearch />} />

          {/* Future activities can have more routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
