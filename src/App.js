import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      todos: [{ title: 'Smith', edit: false }, { title: 'Virat', edit: false }],
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
    let obj = { title: this.state.value };
    this.setState({
      todos: [...this.state.todos, obj],
      value: ''
    })
  }

  delete_todo = (index) => {
    this.state.todos.splice(index, 1);
    this.setState({
      todos: this.state.todos
    });
  }


  // Using prompt 
  // edit_todo = (index) => {
  //   var updated_value = prompt("Enter the Updated Value");
  //   this.state.todos[index] = updated_value;
  //   this.setState({
  //     todos: this.state.todos
  //   });
  // }

  // Using input 

  edit_todo = (index, val) => {
    this.state.todos[index].edit = true;
    this.setState({
      todos: this.state.todos
    });
  }

  handle_change = (e, index) => {
    this.state.todos[index].title = e.target.value;
    this.setState({
      todos: this.state.todos
    });
  }

  update_value = (index) => {
    this.state.todos[index].edit = false;
    this.setState({
      todos: this.state.todos
    });
  }

  render() {
    let { todos, value } = this.state;
    return (
      <div className="container">
            <div className="row">
            <div className="col-12">
            <input value={value} onChange={(e) => this.setState({value: e.target.value})} type="text" placeholder="Enter any task"/>
            <button onClick={this.add_todo} className="btn btn-primary mr-2 btn-sm mb-1 task-btn addtask">ADD TASK</button>
            <button onClick={this.delete_all} className="btn btn-danger btn-sm mb-1 task-btn dltall">DELETE ALL</button>
            </div>
            </div>
            <ul className="list-unstyled">
              {
                todos.map((v, i) => {
                  return (
                    <li key={i}>
                      {v.edit ? <input type="text" value={v.title} onChange={(e) => this.handle_change(e, i)} placeholder="Enter the updated value" /> : v.title}
                      {v.edit ?
                        <button onClick={() => this.update_value(i)} className="task-btn btn btn-info btn-sm ml-1 mb-1 updbtn">UPDATE</button>
                        :
                        <button onClick={() => this.edit_todo(i, v.title)} className="task-btn btn btn-warning btn-sm mb-1 ml-2 editbtn">EDIT</button>}
                      <button onClick={() => this.delete_todo(i)} className="task-btn btn btn-dark ml-1 mb-1 btn-sm dltbtn"> DELETE</button>
                    </li>
                  );
                })
              }
            </ul>
          </div>
    );
  }
}

export default App;
