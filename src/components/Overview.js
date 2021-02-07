import React from 'react';
import uniqid from 'uniqid';

const Overview = (props) => {
  const { tasks } = props;

  return (
    <ol>
      {tasks.map(task => <li key={uniqid()}>{task}</li>)}
    </ol>
  );
}

export default Overview;