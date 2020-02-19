import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { compose } from "redux";
import { setHello } from "../store/actions";
import Menu from "../components/Menu";

const About = ({ match: { url } }) => {
  const hello = useSelector(state => state.hello);
  const dispatchSetHello = compose(useDispatch(), setHello);
  return (
    <>
      <Menu current={url} />
      <h1>About</h1>
      <br />
      {hello}
      <br />
      <button type="button" onClick={() => dispatchSetHello("Hello")}>
        Say
      </button>
    </>
  );
};

export default About;
