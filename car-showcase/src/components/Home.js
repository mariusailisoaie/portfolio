import React from 'react';
import ListCars from './ListCars';

const Home = () => {
  return (
    <div>
      <div className="container">
        <h1 className="center">Welcome to CopenCars</h1>

        <ListCars />
      </div>
    </div>
  )
}

export default Home;