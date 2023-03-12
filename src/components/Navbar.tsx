import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 border-b-2 px-10">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl font-bold">
          The Creator.
        </a>
      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>List Of Creator</a>
          </li>
          <li>
            <a>Favorite</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
