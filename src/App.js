import React from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends React.Component{

  render(){
    return(
      <div className="App">
          <div className="screen">
            <p className="text">{this.props.clicks}</p>
          </div>
          <div className="buttons">
            <p>Controls</p>
            <button id="i-button" className="button-items" onClick={this.props.increment}><span role="img" aria-label="button-logo">➕</span>Increase</button>
            <button id="d-button" className="button-items" onClick={this.props.decrement}><span role="img" aria-label="button-logo">➖</span>Reduce</button>
            <button id="r-button" className="button-items" onClick={this.props.reset}><span role="img" aria-label="button-logo">🔁</span>Reset</button>
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    clicks: state.clicks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({type: 'increment'}),
    decrement: () => dispatch({type: 'decrement'}),
    reset: () => dispatch({type: 'reset'})
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
