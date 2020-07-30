import React, {useState} from 'react';
import Task from './Task';

const initialTasks = [
  {id: 1, descr: 'walk the dog'},
  {id: 2, descr: 'walk the cat'}
];

function App() {
  // State
  const [tasks, setTasks] = useState(initialTasks);
  // Utility Methods
  const addTask = (event) => {
    event.preventDefault();
    let newTaskEl = document.getElementById('newTask');
    let newTask = newTaskEl.value;
    let newTasks = [...tasks];
    newTasks.push({id: newTasks.length+1, descr: newTask});
    setTasks(newTasks);
    newTaskEl.value = '';
  };
  const removeTask = (event) => {
    event.preventDefault();
    let taskId = event.target.getAttribute('id');
    let newTasks = [...tasks];
    newTasks.splice(taskId-1, 1);
    setTasks(newTasks);
  };
  // Render
  return (
    <div className="App">
      <h1>My Task List</h1>
      <table>
        {tasks.map((task, i) =>
          <Task key={task.id} task={task} removeTask={removeTask}/>
        )}
      </table>
      <form>
        <input id="newTask" type="text"/>
        <input type="submit" className="add" onClick={addTask} value="Add Task" />
      </form>
    </div>
  );
}

export default App;
