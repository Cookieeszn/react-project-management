import React from 'react';
import NewTask from './NewTask';

const Tasks = props => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAddTask={props.onAddTask} onDeleteTask={props.onDeleteTask} />
      {props.tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet.
        </p>
      )}
      {props.tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {props.tasks.map(task => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.text}</span>
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={() => props.onDeleteTask(task.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Tasks;
