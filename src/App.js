import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      todos: ["Virat","Smith","Baber","Williamson","Rohit"],
      value: ''
    };
  }

  // add_todo = () => {
  //   this.state.todos.push(this.state.value);
  //   this.setState({
  //     todos: this.state.todos
  //   })
  // }

  // 2nd Method to add_todo 

  add_todo = () => {
    this.setState({
      todos: [...this.state.todos, this.state.value],
      value: ''
    })
  }
  render() {
    let {todos,value} = this.state;
    return(
      <div>
        <input value={value} onChange={(e) => this.setState({value: e.target.value})} type="text" placeholder="Enter any task"/>
        <button onClick={this.add_todo}>Add Task</button>
        <ul>
          {
            todos.map((v,i)=>{
            return (
              <li key={i}> {v} </li>
            );
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
