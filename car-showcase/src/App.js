import React, { Component } from 'react';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ListCars from './components/ListCars';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

class App extends Component {
  state = {
    cars: [
      {id: 1, brand: 'VW', model: 'Golf 7', price: 'EUR 25.000'},
      {id: 2, brand: 'Skoda', model: 'Octavia', price: 'EUR 22.000'},
      {id: 3, brand: 'Mercedez', model: 'Benz', price: 'EUR 55.000'}
    ]
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Navbar />
        
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/about' component={ About } />
        </Switch>

        <ListCars cars={this.state.cars} />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
