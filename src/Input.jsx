import React, { useEffect } from "react";

const Input = () => {
  const [value, setValue] = React.useState("");
  const [todos, setTodos] = React.useState([]);
  const todosUrl = "https://jsonplaceholder.typicode.com/todos?&";

  const fetchTodos = async () => {
    try {
      const response = await fetch(todosUrl);

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setTodos(data);
      }
    } catch (error) {
      console.error(3, error);
    }
  };
  useEffect(() => {
    fetchTodos();
  }, []);
  const postTodos = async () => {
    try {
      fetch(todosUrl, {
        method: "POST",
        // headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title: "test" }),
      });
      
    } catch (e) {
      console.error(e);
    }
  };


  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={postTodos}>Добавить</button>
      <div>
        <ul>
          {todos.map((e) => {
            return <li key={e.id}>{e.title} </li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Input;
