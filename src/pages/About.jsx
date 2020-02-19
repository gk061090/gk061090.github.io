import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { compose } from "redux";
import { setHello } from "../store/actions";
import Menu from "../components/Menu";

const About = () => {
  const hello = useSelector(state => state.hello);
  const dispatchSetHello = compose(useDispatch(), setHello);
  return (
    <div>
      <Menu />
      <h1>About</h1>
      <br />
      {hello}
      <br />
      <button type="button" onClick={() => dispatchSetHello("Hello")}>
        Say
      </button>
    </div>
  );
};

export default About;
