import React from 'react';
import './App.css';


class App extends React.Component{
  state = {
    clicks: 0
  }

  handleIncrement = () => {
    
    let count = this.state.clicks;
    count++;
    this.setState({
      clicks: count
    })
  }
  handleDecrement = () => {
    if(this.state.clicks > 0){
      let count = this.state.clicks;
      count--;
      this.setState({
        clicks: count
      })
    }
   
  }
  handleReset = () => {
    this.setState({
      clicks: 0
    })
  }

  render(){
    return(
      <div className="App">
          <div className="screen">
            <p className="text">{this.state.clicks}</p>
          </div>
          <div className="buttons">
            <p>Controls</p>
            <button id="i-button" className="button-items" onClick={this.handleIncrement}><span role="img" aria-label="button-logo">➕</span>Increase</button>
            <button id="d-button" className="button-items" onClick={this.handleDecrement}><span role="img" aria-label="button-logo">➖</span>Reduce</button>
            <button id="r-button" className="button-items" onClick={this.handleReset}><span role="img" aria-label="button-logo">🔁</span>Reset</button>
          </div>
      </div>
    )
  }
}
export default App;
