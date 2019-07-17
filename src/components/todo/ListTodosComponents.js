import React, { Component } from 'react'
import { withRouter} from 'react-router-dom'


 class ListTodosComponent extends Component {
   state = {
     todos : [
       {id:1, description: 'learn react', done: 'false', date: new Date()},
       {id:2, description: 'learn react-nativ', done: 'false', date: new Date()},
       {id:3, description: 'learn node', done: 'false', date: new Date()},
       {id:4, description: 'learn mongodb', done: 'false', date: new Date()},
     ]
   }
  render() {
    return (
      <div className="container">
        <h1> todo list</h1>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>description</th>
              <th>DONE</th>
              <th>DATE</th>
            </tr>
          </thead>
          <tbody>
          {
            this.state.todos.map (todo =>
              <tr >
                  <td>{todo.id}</td>
                  <td>{todo.description}</td>
                  <td>{todo.done.toString()}</td>
                  <td>{todo.date.toString()}</td>
              </tr>
            )
              }
          </tbody>
        </table>
        <div className="row">
         <button className="btn btn-success" onClick={this.addTodoClicked}>Add</button>
        </div>
      </div>
    )
  }
}

export default withRouter(ListTodosComponent);