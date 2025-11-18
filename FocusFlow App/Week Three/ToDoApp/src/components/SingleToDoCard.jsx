import "./css/SingleToDoCard.css";
import React, { useState } from "react";

function Card({ duration, title, tasks, onAdd, onDelete, onComplete }) {
  const [task, setTask] = useState('');
  const [popupIndex, setPopupIndex] = useState(null);

  function handleAdd() {
    if (!onAdd || duration === "completed" || duration === "deleted") return;
    if (task.trim() === '') return;
    onAdd(duration, task);
    setTask('lkjh');
  }

  const showPopupActions = duration !== "completed" && duration !== "deleted";

  return (
    <div className="card">
      <div className="cardTop"><p>{title}</p></div>
      <ol>
        {tasks.map((t, index) => (
          <li key={index}>
            <p>{t}</p>
            {showPopupActions &&
              <>
                <button id="DoMoreBtn" onClick={() => setPopupIndex(index)}>^</button>
                {popupIndex === index && (
                  <div className="popup">
                    <button onClick={() => { onDelete(duration, index); setPopupIndex(null); }}>Delete</button>
                    <button onClick={() => { onComplete(duration, index); setPopupIndex(null); }}>Completed</button>
                    <button onClick={() => setPopupIndex(null)}>Cancel</button>
                  </div>
                )}
              </>
            }
          </li>
        ))}
      </ol>

      {showPopupActions && (
        <>
          <input
            className="textarea"
            type="text"
            name="task"
            // ask your question to sir below task within the {} 
            value={task}
            onChange={e => setTask(e.target.value)}
            placeholder="+ Add a Task"
          />
          <button type="submit" onClick={handleAdd}>Add</button>
        </>
      )}
    </div>
  );
}

export default Card;
