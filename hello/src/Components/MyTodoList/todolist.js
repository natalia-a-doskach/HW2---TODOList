import React from 'react';
import TaskAdd from '../TaskAdd/taskAdd';
import TaskList from '../TaskList/taskList';
import './todolist.css';

function task(id, name, description, completed) {
  this.id = id;
  this.name = name;
  this.description = description;
  this.completed = completed;
}

class MyTodoList extends React.Component {
  state = {
    tasks: [],
    message: "My TODO List",
  }
  handleAdd = (childData) => {
      this.setState({ tasks: [...this.state.tasks, new task(1, childData.name, childData.description, false)] })
      // this.state.tasks.push(childData);
      //
      // this.setState({message: childData.name})
};
  render(tasks){
    return (
      <div>
      <h1 id="header">{this.state.message}</h1>
      <TaskAdd parentCallback = {this.handleAdd}/>
      <TaskList items={this.state.tasks} />
      </div>
);
  }
}

export default MyTodoList;
