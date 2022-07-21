import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  }

  const handleDeleteTask = (deletedTaskText) => {
    setTasks(tasks.filter((task) => task.text !== deletedTaskText));
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={category}
        onSelectCategory={setCategory}
      />
      <div className="tasks">
        <h5>Tasks</h5>
        <NewTaskForm
          categories={CATEGORIES.filter((categ) => categ !== "All")}
          onTaskFormSubmit={handleAddTask}
        />
        <TaskList onDeleteTask={handleDeleteTask} tasks={tasks.filter(
    (task) => category === "All" || task.category === category)} />
      </div>
    </div>
  );
}

export default App;