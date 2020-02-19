import React from "react";
import Menu from "../components/Menu";

const Home = ({ match: { url } }) => (
  <>
    <Menu current={url} />
    <h1>Home</h1>
  </>
);

export default Home;
