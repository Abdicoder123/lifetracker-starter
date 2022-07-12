import "./NavLinks.css";
import { Link } from "react-router-dom";

export default function NavLinks(props) {
  return (
    <div className="nav-links">
      <div className="Links">
        <Link> Activity</Link>
        <Link>Nutrition</Link>
        <Link>Exercise</Link>
        <Link>Sleep</Link>
      </div>
    </div>
  );
}
