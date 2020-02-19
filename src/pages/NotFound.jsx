import React from "react";
import Menu from "../components/Menu";

const NotFound = ({ match: { url } }) => (
  <>
    <Menu current={url} />
    <h1>NotFound</h1>
  </>
);

export default NotFound;
