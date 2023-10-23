import React from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <div className="bg-zinc-900 h-screen text-white flex items-center justify-center">
      <div className="bg-gray-950 p-4 w-auto">
        <h1 className="text-3xl font-bold text-center block my-2">Tasks App</h1>
        <TaskForm />
        <TaskList />
      </div>
    </div>
  )
}

export default App