export function productsReducer(state = null, action) {
  switch (action.type) {
    case 'FETCH_CARS':
      return action.payload;

    default:
      return state;
  }
}

export function carReducer(state = null, action) {
  switch (action.type) {
    case 'FETCH_CARS':
      return action.payload;

    default:
      return state;
  }
}
