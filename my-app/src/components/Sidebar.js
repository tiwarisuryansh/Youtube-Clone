import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
 
  return (
    <div className="p-4 shadow-lg w-48"> 
      <ul>
        <li>
          <Link to="/">Home</Link>
          </li>
        <li>Music</li>
        <li>Movies</li>
        <li>Gaming</li>
      </ul>
      <h3 className="font-bold">Subscriptions</h3>
      <ul>
        <li>Home</li>
        <li>Music</li>
        <li>Movies</li>
        <li>Gaming</li>
      </ul>
      <h3 className=" font-bold pt-5">Watch Later</h3>
      <ul>
        <li>Home</li>
        <li>Music</li>
        <li>Movies</li>
        <li>Gaming</li>
      </ul>
    </div>
  );
};

export default Sidebar;
