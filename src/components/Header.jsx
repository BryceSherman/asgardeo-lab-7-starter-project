import { NavLink } from "react-router-dom";
import "../App.css";

export default function Header({ rightSlot }) {
  return (
    <header className="app-header">
      {/* Left: title + nav */}
      <nav className="app-nav">
        <span style={{ color: "white", fontWeight: 800 }}>Employee Portal</span>

        <NavLink className="nav-link" to="/">
          Home
        </NavLink>

        <NavLink className="nav-link" to="/employee-mgmt">
          Employee Mgmt
        </NavLink>
      </nav>

      {/* Right: auth controls */}
      <div className="header-right">{rightSlot}</div>
    </header>
  );
}