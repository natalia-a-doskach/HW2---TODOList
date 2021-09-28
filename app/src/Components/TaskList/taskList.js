import React from 'react';
import Task from '../Task/task';
import './taskList.css';

class TaskList extends React.Component {
  render() {
    const listItems= this.props.items.map(x => <Task title={x.name} description={x.description} isComplete={x.completed}/>);
    return (
      <div id="listCont">{listItems}</div>
);
  }
}

export default TaskList;
