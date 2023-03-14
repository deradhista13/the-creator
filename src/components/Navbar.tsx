import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 border-b-2 px-10">
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost normal-case text-xl font-bold">
          The Creator.
        </Link>
      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/"}>List Of Creator</Link>
          </li>
          <li>
            <Link to={"/favorite"}>Favorite</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
