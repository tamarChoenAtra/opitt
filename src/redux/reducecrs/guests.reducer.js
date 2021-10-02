import produce, { current } from 'immer';
import createReducer from './reducerUtils';
import { reset } from './appReducers';
import { actions } from '../actions';

const initialState = {
    guestsList: [
        {
            name: 'ישראל ישראלי',
            carKind: 'מיצובישי',
            carId: '013-45-123'
        },
        {
            name: 'שמעון כהן',
            carKind: 'טויוטה',
            carId: '889-45-445'
        },
        {
            name: 'דוד לוי',
            carKind: 'מרצדס',
            carId: '322-32-232'
        }
    ],
    newGuest: {},
    selectedGuest: {}
}

const guests = {
    reset(state) {
        state = reset(state, initialState);
    },
    setGuestsList(state, action) {
        state.guestsList = action.payload;
    },
    setNewGuest(state, action) {
        state.guestsList = action.payload;
    },
    setSelectedGuest(state, action) {
        state.guestsList = action.payload;
    },
}

export default produce((state, action) =>
    createReducer(state, action, guests), initialState);