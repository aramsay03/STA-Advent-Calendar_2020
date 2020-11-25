import React, { Component } from 'react';
import './App.css';
import Windows from './components/Windows';
import Popup from './components/Popup';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false
    }

    this.togglePopup = this.togglePopup.bind(this);
  }

  togglePopup = () => {  
    this.setState({ showPopup: !this.state.showPopup });  
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>STA Advent Calendar 2020</h1>
        </header>
        <main className="App-main">
          <div className="App-main-left">
            <h2>left side</h2>
          </div>
          <div className="App-main-center">
            <Windows openPopup={this.togglePopup}/>
            {this.state.showPopup ?  
            <Popup  
                text="PopUp Window"
                closePopup={this.togglePopup} 
            />  
            : null  
            }
          </div>
          <div className="App-main-right">
            <h2>right side</h2>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
