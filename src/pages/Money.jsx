import React from "react";
import Menu from "../components/Menu";

const Money = ({ match: { url } }) => (
  <>
    <Menu current={url} />
    <div>Money</div>
  </>
);

export default Money;
