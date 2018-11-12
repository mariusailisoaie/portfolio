import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ListCars extends Component {
  render() {
    const { cars } = this.props;

    const carList = this.props.cars ? (
      cars.map(car => {
        return (
          <div className="card" key={car.id}>
            <Link to={'/' + car.id}>
              <div className="card-content car center black-text">
                <h4>Brand: {car.brand}</h4>
                <h5>Model: {car.model}</h5>
                <h5>Price: {car.price}</h5>
                <h6>Click for more info</h6>
              </div>
            </Link>
          </div>
        )
      })
    ) : (
        <div className="center">No cars available at the moment.</div>
      )

    return (
      <div className='car-list container'>
        {carList}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cars: state.cars
  }
}

export default connect(mapStateToProps)(ListCars);