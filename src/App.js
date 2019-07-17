import React from 'react';
import './App.css';
import TodoApp from '../src/components/todo/TodoApp';
import './bootstrap.css'
import { withRouter} from 'react-router-dom'




function App() {
  return (
    <div className="App">
      <TodoApp />
    </div>
  );
}

export default withRouter(App);
