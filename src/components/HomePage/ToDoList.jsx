import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [hoverIndex, setHoverIndex] = useState(null);

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h1>To-Do List</h1>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Añadir una tarea"
          style={{
            width: "70%",
            padding: "5px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            marginRight: "10px",
          }}
        />
        <button
          onClick={addTask}
          style={{
            padding: "5px 10px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Añadir
        </button>
      </div>
      <ul style={{ listStyle: "none", padding: "0" }}>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "5px",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              position: "relative",
              backgroundColor: hoverIndex === index ? "#f9f9f9" : "white",
              transition: "background-color 0.3s",
            }}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            {task}
            <button
              onClick={() => deleteTask(index)}
              style={{
                padding: "5px",
                backgroundColor: "#FF0000",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                position: "absolute",
                right: "10px",
                opacity: hoverIndex === index ? "1" : "0",
                transition: "opacity 0.3s",
              }}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
