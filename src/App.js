import React, {Component} from 'react';
import './App.css';

import { IndexList } from './components/index-list/index-list.component';

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
    fetch(`http://api.themoviedb.org/3/search/tv?query=criminal&Minds&api_key=c0cfde6eeaf28982f2de2403db46d141`)
    .then(response => response.json())
    // .then(d => console.log(d.results))
    .then(dramas_info => this.setState({dramas: dramas_info.results}))
  }

  render(){
    return(
      <div className="App">
      <header className="App-header">
        {console.log(this.state.dramas)}
        <IndexList>
          {this.state.dramas.map(drama => <h1 key={drama.id}>{drama.name}</h1>)}
        </IndexList>
      </header>
    </div>
    );
  }
}

export default App;
