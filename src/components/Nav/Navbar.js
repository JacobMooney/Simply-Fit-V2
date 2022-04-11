import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
      <nav>
        <div className="navContainer">
          <Link className="logo" href to="/home">
            Simply Fit
          </Link>
          <ul className="navLinks">
            <li>
              <Link to="/nutrition">Nutrition //</Link>
            </li>
            <li>
              <Link to="/education">Fitness //</Link>
            </li>
            <li>
              <Link to="/options">Routines</Link>
            </li>
          </ul>
        </div>
      </nav>
  );
}

export default Navbar;
