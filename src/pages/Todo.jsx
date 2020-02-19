/* eslint-disable no-underscore-dangle */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "../store/actions";
import Menu from "../components/Menu";

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
      <Menu />
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
