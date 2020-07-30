import React from 'react';

function Task ({task: {id, descr}, removeTask}) {
  return (
    <tr>
      <td>{id}.</td><td>{descr}</td><td><button id={id} className="remove" onClick={removeTask}>&times;</button></td>
    </tr>
  );
}

export default Task;
