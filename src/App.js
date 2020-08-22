import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super();

    this.state = {
      qoutes: [],
      qouteIndex: 1,
      fadeIn: false,
    }
  }

  fetchQoute = () => {
    const url = 'https://type.fit/api/quotes'
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          qoutes: data
        })
      })
  }

  getNewQoute = () => {
    const length = this.state.qoutes.length;
    const random = Math.floor(Math.random() * length);
    this.setState({
      qouteIndex: random,
      fadeIn: true
    })
  }

  componentDidMount() {
    this.fetchQoute();
  }

  render() {
    return (
      <div className="App">
        <div className="card-wrapper">
          <div className="card">
            <p className="fade-in">{this.state.qoutes.length > 0 ? this.state.qoutes[this.state.qouteIndex].text : 'NA'}</p>
            <p className="fade-in">{this.state.qoutes.length > 0 ? (<><span>&#8208;</span>{this.state.qoutes[this.state.qouteIndex].author ? this.state.qoutes[this.state.qouteIndex].author : 'Anonymous'}</>) : 'NA'}</p>
          </div>
          <button onClick={this.getNewQoute}>NEXT</button>
        </div>
      </div>
    );
  }
}

export default App;
