import React from "react";
import { Link } from "react-router-dom";

const navs = [
  {
    path: "/",
    title: "Home"
  },
  {
    path: "/about",
    title: "About"
  },
  {
    path: "/todo",
    title: "Todo"
  },
  {
    path: "/money",
    title: "Money"
  }
];

const Menu = ({ current }) => {
  return (
    <nav>
      {navs.map(({ path, title }) => {
        if (path === current) {
          return <span>{title}</span>;
        }
        return <Link to={path}>{title}</Link>;
      })}
    </nav>
  );
};

export default Menu;
