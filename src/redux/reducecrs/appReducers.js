import { combineReducers } from 'redux';
import carsReducer from './cars.reducer';
import settingsReducer from './settings.reducer';
import parkingsReducer from './parkings.reducer';
import guestsReducer from './guests.reducer';
import generalReducer from './general.reducer';

// Combine with other reducers we may add in the future
const appReducers = combineReducers({
    cars: carsReducer,
    settings: settingsReducer,
    parkings: parkingsReducer,
    guests: guestsReducer,
    general: generalReducer
});

//reset the reducer
const reset = (state, initialState) => {
    Object.keys(initialState).forEach((key) => {
        state[key] = initialState[key];
    })
    return state;
}

export default appReducers;