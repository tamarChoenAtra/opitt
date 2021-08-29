import { combineReducers } from 'redux';
import carsReducer from './cars.reducer';

// Combine with other reducers we may add in the future
const appReducers = combineReducers({
    cars: carsReducer
});

//reset the reducer
const reset = (state, initialState) => {
    Object.keys(initialState).forEach((key) => {
        state[key] = initialState[key];
    })
    return state;
}


export default appReducers;