import React from 'react';
import './task.css';

class Task extends React.Component {
  constructor(props) {
   super(props)
   this.handleComplete = this.handleComplete.bind(this)
   this.state = {
    isCompleted: props.isCompleted
  };
}
handleComplete(){
 this.setState({
isCompleted: !this.state.isCompleted
});
}
  render() {
    return (
      <div id="taskCont">
      <h1 id="title">{this.props.id}{this.props.title}</h1>
      <p id="description">{this.props.description}</p>
      {this.state.isCompleted? <button id="completedBtn" class="taskBtn" onClick={this.handleComplete}>completed</button>: <button id="completeBtn" class="taskBtn" onClick={this.handleComplete}>complete</button>}
      </div>
);
  }
}

export default Task;
