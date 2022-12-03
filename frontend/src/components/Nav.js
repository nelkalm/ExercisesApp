import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav-container">
      <Link to="/" as={Link}>
        Home
      </Link>
      <Link to="/create" as={Link}>
        Create
      </Link>
    </nav>
  );
}

export default Nav;
