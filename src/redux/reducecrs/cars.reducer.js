import produce, { current } from 'immer';
import createReducer from './reducerUtils';
import { reset } from './appReducers';

const initialState = {
    cars: []
}

const cars = {
    reset(state) {
        state = reset(state, initialState);
    },
    addCar(state, action) {
        state.cars.push(action.payload);
        console.log('cars', current(state));
    }
}

export default produce((state, action) =>
    createReducer(state, action, cars), initialState);