import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <span> | </span>
      <Link to="/about">About</Link>
      <span> | </span>
      <Link to="/todo">Todo</Link>
      <span> | </span>
      <Link to="/money">Money</Link>
    </nav>
  );
};

export default Menu;
