import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Login from './Login'

function App() {
  return (
    <div className='todo-app'>
      <TodoList />
      {/* <Login/> */}
    </div>
  );
}

export default App;