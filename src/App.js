import React, {Component} from 'react';
import Todos from './components/Todos'
import './App.css';

class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        titile: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        titile: 'Dinner',
        completed: false
      },
      {
        id: 3,
        titile: 'Meeting',
        completed: false
      }
    ]
  }

  render(){
  return (
    <div className="App">
      <Todos />
    </div>
  );
  }
}

export default App;
