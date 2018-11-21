import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteCar } from '../actions/carActions';

class Car extends Component {
  handleClick = () => {
    this.props.deleteCar(this.props.car.id);
    this.props.history.push('/');
  }

  render() {

    const car = this.props.car ? (
      <div className="card">
        <div className="card-content center">
          <h4>Brand: {this.props.car.brand}</h4>
          <h5>Model: {this.props.car.model}</h5>
          <h5>Price: {this.props.car.price}</h5>
          <button onClick={this.handleClick} className="btn waves-effect blue lighten-2">Delete car</button>
        </div>
      </div>
    ) : (
        <div>Loading car...</div>
      )
    return (
      <div className="container">
        { car }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.car_id;
  return {
    car: state.cars.find(car => car.id === id)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteCar: id => dispatch(deleteCar(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Car);