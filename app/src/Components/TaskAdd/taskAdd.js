import React from 'react';
import './taskAdd.css';

class TaskAdd extends React.Component {
  constructor(props) {
   super(props)
   this.handleAdd = this.handleAdd.bind(this)
   this.updateName = this.updateName.bind(this);
  this.updateDescription = this.updateDescription.bind(this);
}
state = {
 name: "",
 description: "",
}

handleAdd() {
  var task = {
  name: this.state.name,
  description: this.state.description
};
this.props.parentCallback(task);
 }

 updateName(name){
   this.setState({
 name: name.target.value
});
 }
 updateDescription(name){
   this.setState({
 description: name.target.value
});
 }

  render() {
    return (
      <div id="form">
        <label>
          Title:
          <input id="nameInput" type="text" value={this.state.name} onChange={this.updateName} />
        </label>
        <label>
          Description:
          <textArea id="descriptionInput" type="text" value={this.state.description} onChange={this.updateDescription} />
        </label>
        <button id="submit" value="Add" onClick={this.handleAdd}  >Add</button>
      </div>
);
  }
}

export default TaskAdd;
