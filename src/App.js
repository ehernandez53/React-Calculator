import React, { Component } from 'react';
import Calculation from "./components/calculation";
import Buttons from "./components/buttons";
import './App.css';

class App extends Component {
  constructor(){
      super();
      this.state = {
          calc: ""
      }
  }

  calculation = () => {
    try {
        this.setState({
            calc: (eval(this.state.calc) || "" )
        })
    } 
    catch (e) {
        this.setState({
            calc: ""
        })
    }
  };

  clear = () => {
      this.setState({
          calc: ""
      })
  };

  onClick = button => {
    if(button === "Clear"){
      this.clear()
    }
    else if(button === "="){
        this.calculation()
    }
    else {
        this.setState({
            calc: this.state.calc + button
        })
    }
  };

  render() {
      return (
          <div>
              <div className="Calculator">
                  <h3>Calculator</h3>
                  <Calculation calc={this.state.calc}/>
                  <Buttons onClick={this.onClick}/>
              </div>
          </div>
      );
  }
}
export default App;