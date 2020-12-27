import React from 'react';
import TodosContainer from './Container/TodosContainer';
import './App.css';

function App() {
  return (
    <>
    <div class="header">
      <p class="title">MemoPad</p>
    </div>
    <div >
      <TodosContainer/>
    </div>
    </>
  );
}

export default App;
