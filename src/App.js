import React from 'react';
import img from './qt.png';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super();

    this.state = {
      qoutes: [],
      qouteIndex: 1,
      fadeIn: true,
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
    this.setState({
      fadeIn: false
    })
    setTimeout(() => {
      const length = this.state.qoutes.length;
      const random = Math.floor(Math.random() * length);
      this.setState({
        qouteIndex: random,
        fadeIn: true
      })
    }, 200)

  }

  componentDidMount() {
    this.fetchQoute();
  }

  render() {
    return (
      <div className="App">
        <div className="card-wrapper">
          <div className="card">
            {
              this.state.qoutes.length > 0 ?
                (
                  <>
                    <div className="bg-image"></div>
                      <div className="qoute-wrapper">
                        <p className={this.state.fadeIn ? 'fade-in' : 'fade-out'}>{this.state.qoutes.length > 0 ? this.state.qoutes[this.state.qouteIndex].text : 'NA'}</p>
                        <p className={this.state.fadeIn ? 'fade-in' : 'fade-out'}>{this.state.qoutes.length > 0 ? (<><span>&#8208;</span>{this.state.qoutes[this.state.qouteIndex].author ? this.state.qoutes[this.state.qouteIndex].author : 'Anonymous'}</>) : 'NA'}</p>
                      </div>
                  </>
                )
                :
                (
                  <div className="loader"></div>
                )
            }

          </div>
          <button onClick={this.getNewQoute}>NEXT</button>
        </div>
      </div >
    );
  }
}

export default App;
