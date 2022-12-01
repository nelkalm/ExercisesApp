import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/" as={Link}>
        Home
      </Link>
      <Link to="/create" as={Link}>
        Create
      </Link>
      <Link to="/edit" as={Link}>
        Edit
      </Link>
    </nav>
  );
}

export default Nav;
