import Card from "./SingleToDoCard";
import "./css/BoardContent.css";
import React, { useState } from "react";

function BoardContent() {
  const [tasks, setTasks] = useState({
    today: [],
    week: [],
    month: []
  });

  const [completedTasks, setCompletedTasks] = useState([]);
  const [deletedTasks, setDeletedTasks] = useState([]);

  function handleAdd(duration, task) {
    setTasks(prev => ({
      ...prev,
      [duration]: [...prev[duration], task]
    }));
  }

  function handleDelete(duration, index) {
    const taskToDelete = tasks[duration][index];

    setTasks(prev => ({
      ...prev,
      [duration]: prev[duration].filter((_, i) => i !== index)
    }));

    setDeletedTasks(prevDeleted => [...prevDeleted, taskToDelete]);
  }

  function handleComplete(duration, index) {
    const taskToComplete = tasks[duration][index];

    setTasks(prev => ({
      ...prev,
      [duration]: prev[duration].filter((_, i) => i !== index)
    }));

    setCompletedTasks(prevCompleted => [...prevCompleted, taskToComplete]);
  }

  return (
    <div className="boardContent" style={{ display: "flex", gap: "20px" }}>
      <Card
        duration="today"
        title="Today"
        tasks={tasks.today}
        onAdd={handleAdd}
        onDelete={handleDelete}
        onComplete={handleComplete}
      />
      <Card
        duration="week"
        title="Week"
        tasks={tasks.week}
        onAdd={handleAdd}
        onDelete={handleDelete}
        onComplete={handleComplete}
      />
        <Card
          duration="month"
          title="Month"
          tasks={tasks.month}
          onAdd={handleAdd}
          onDelete={handleDelete}
          onComplete={handleComplete}
        />
      <Card
        duration="completed"
        title="Completed"
        tasks={completedTasks}
      />
      <Card
        duration="deleted"
        title="Deleted"
        tasks={deletedTasks}
      />
    </div>
  );
}

export default BoardContent;
