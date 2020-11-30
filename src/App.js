import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super();  //calls the constructor methon on the component class
              //gives access to state

    this.state={
      dramas: [
      ]
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({dramas: users}))
  }

  render(){
    return(
      <div className="App">
      <header className="App-header">
        {this.state.dramas.map(dramas => <h1>{dramas.name}</h1>)}
      </header>
    </div>
    );
  }
}

export default App;
