import React from 'react';
import {render} from 'react-dom';
import "./styles.css";

class App extends React.Component{
  render(){
    return (<h1>holla</h1>);
  }
}

render(<App/>,document.getElementById('root'));