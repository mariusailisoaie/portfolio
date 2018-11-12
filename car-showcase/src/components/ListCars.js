import React, { Component } from 'react';

class ListCars extends Component {
  render() {

    const { cars } = this.props;
    console.log(cars);

    const carList = this.props.cars ? (
      cars.map(car => {
        return (
          <div className="car center" key={car.id}>
            <h4>Brand: {car.brand}</h4>
            <h5>Model: {car.model}</h5>
            <h5>Price: {car.price}</h5>
            <br/>
          </div>
        )
      })
    ) : (
        <div>No cars available at the moment.</div>
      )

    return (
      <div className='car-list container'>
        { carList }
      </div>
    )
  }
}

export default ListCars;