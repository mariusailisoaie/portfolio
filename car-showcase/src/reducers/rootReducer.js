const initState = {
  cars: [
    {id: '1', brand: 'VW', model: 'Golf 7', price: 'EUR 25.000'},
    {id: '2', brand: 'Skoda', model: 'Octavia', price: 'EUR 22.000'},
    {id: '3', brand: 'Mercedez', model: 'Benz', price: 'EUR 55.000'},
    {id: '4', brand: 'Dacia', model: 'Sandero', price: 'EUR 9.999'},
    {id: '5', brand: 'Audi', model: 'A6', price: 'EUR 59.999'}
  ]
}

const rootReducer = (state = initState, action) => {
  return state;
}

export default rootReducer;