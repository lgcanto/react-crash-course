import React, { Component } from 'react';
import Todos from './components/Todos'
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 0,
        title: 'Fazer slides para o TCC',
        completed: false
      },
      {
        id: 1,
        title: 'Aprender React',
        completed: false
      },
      {
        id: 2,
        title: 'Subir aplicação no GCP',
        completed: false
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
