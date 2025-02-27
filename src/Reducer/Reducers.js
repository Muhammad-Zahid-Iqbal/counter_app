// reducers.js
import { INCREMENT, DECREMENT } from '../actions/Actions';

const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter > 0 ? state.counter - 1 : 0,
      };
    default:
      return state;
  }
};

export default counterReducer;
