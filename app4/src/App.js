import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    }
    this.getCars = this.getCars.bind(this);
  }

  getCars() { // need to bind to this?
    axios.get('https://joes-autos.herokuapp.com/api/vehicles')
      .then(res => {
        this.setState({
          cars: res.data // .data?

        })
      })
  }

  render() {
    let eachCar = this.state.cars.map(e => {
      return (
        <div>
          <p>{e.id}</p>
          <p>{e.model}</p>
          <p>{e.year}</p>
          <p>{e.color}</p>
          <p>{e.price}</p>
        </div>
      );
    })
    return (
      <div className="App">
        <button onClick={this.getCars}>Get cars</button>
        {console.log(this.state.cars)}
        {eachCar}
      </div>
    );
  }
}

export default App;
