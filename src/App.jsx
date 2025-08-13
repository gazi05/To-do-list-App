import Input_Field from "./components/Input_Field";
import Input from "./components/Input_Field";
import { useState } from "react";

function App() {
  const [content, setContent] = useState("");
  const [Tasks, SetTasks] = useState([]);

  function AddTask() {
    if (content.trim() === "") return;

    const newTask = {
      id: Date.now(), // unique ID
      text: content,
      completed: false // track if task is done
    };

    SetTasks([...Tasks, newTask]);
    setContent("");
  }

  function RemoveTask(id) {
    SetTasks(Tasks.filter(task => task.id !== id));
  }

  function ToggleDone(id) {
    SetTasks(
      Tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="flex justify-center mt-6 text-4xl font-bold text-gray-800">
        To Do List App
      </h1>

      <Input_Field
        value={content}
        placeH="Add your task"
        onChangeText={(e) => setContent(e.target.value)}
        onClickAdd={AddTask}
      />

      <div className="max-w-xl mx-auto mt-6 space-y-3">
        {Tasks.map(task => (
          <div
            key={task.id}
            className={`flex items-center justify-between shadow-md rounded-lg px-4 py-2 border transition ${
              task.completed
                ? "bg-green-100 border-green-400"
                : "bg-white border-gray-200 hover:shadow-lg"
            }`}

          >
            <span
              className={`text-lg ${
                task.completed
                  ? "text-gray-500 line-through"
                  : "text-gray-700"
              }`}
            >
              {task.text}
            </span>

            <div className="flex gap-2">
              <button
                onClick={() => ToggleDone(task.id)}
                className={`px-3 py-1 rounded-md text-white transition ${
                  task.completed
                    ? "bg-yellow-500 hover:bg-yellow-600"
                    : "bg-green-500 hover:bg-green-600"
                }`}
              >
                {task.completed ? "Undo" : "Done"}
              </button>

              <button
                onClick={() => RemoveTask(task.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
              >
                ✕
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
