/* eslint-disable no-underscore-dangle */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "../store/actions";

const Todo = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!todos.data) {
      fetchTodos()(dispatch);
    }
  }, []);

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <span>Todo</span>
      </nav>
      <h1>Todo</h1>
      <button type="button" onClick={() => fetchTodos()(dispatch)}>
        Refresh
      </button>
      <br />
      {todos.map(({ id, title, body }) => (
        <p key={id}>
          <b>{title}</b>
          <br />
          {body}
        </p>
      ))}
    </div>
  );
};

export default Todo;
