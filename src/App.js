
import Attack from './Attack'
import React, { Component } from 'react';
import './App.css';

import { render } from '@testing-library/react';
import 'bootstrap/dist/css/bootstrap.min.css';



import Health from './HealthBar';


var username = prompt("enter your name!!")

class App extends Component {
  render() {
      return (
      <div className="App">
        <div className="split left">
          <div className="centered" key="user01">
            <Health />
            <h3>{ username }</h3>
                <div className='attack'>
                  <Attack />
                </div>
          </div>
        </div>
  
        <div className="split right">
          <div className="centered" key="enemy01">
            <Health />
            <h3>enemy</h3>
          </div>
        </div>
      </div>
    );
  }
}


  



export default App;
