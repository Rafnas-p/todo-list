import React, { useState } from "react";
import Creat from "./Creat";

function Home() {
  const [todos, setTodo] = useState([]);
  return (
    <div>
      <h2> Todo List</h2>
      <Creat />
      {todos.length === 0 ? (
        <div>
          {" "}
          <h2>No REcord</h2>
        </div>
      ) : (
        todos.map((todo) => <div>{todo}</div>)
      )}
    </div>
  );
}

export default Home;
