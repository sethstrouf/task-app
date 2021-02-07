import Overview from './components/Overview'
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    }
  }

  addTask() {
    const taskField = document.querySelector("#taskField");
    this.setState ({
      tasks: this.state.tasks.concat(taskField.value),
    });
    taskField.value = "";
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" id="taskField" placeholder="Enter task..." />
          <input type="button" onClick={() => this.addTask()} value="Add Task"></input>
        </form>

        <Overview tasks={this.state.tasks} />
      </div>
    );
   }
}

export default App;
