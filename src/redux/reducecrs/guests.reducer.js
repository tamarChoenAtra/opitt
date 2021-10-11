import produce, { current } from 'immer';
import createReducer from './reducerUtils';
import { reset } from './appReducers';
import { actions } from '../actions';

const initialState = {
    guestsList: [
        {
            id: 0,
            name: 'ישראל ישראלי',
            carKind: 'מיצובישי',
            carId: '013-45-123'
        },
        {
            id: 1,
            name: 'שמעון כהן',
            carKind: 'טויוטה',
            carId: '889-45-445'
        },
        {
            id: 2,
            name: 'דוד לוי',
            carKind: 'מרצדס',
            carId: '322-32-233'
        },

    ],
    newGuest: {},
    selectedGuest: {
        id: 0,
        name: 'ישראל ישראלי',
        carKind: 'מיצובישי',
        carId: '013-45-123'
    },
}

const guests = {
    reset(state) {
        state = reset(state, initialState);
    },
    setGuestsList(state, action) {
        state.guestsList = action.payload;
    },
    setNewGuest(state, action) {
        state.newGuest = action.payload;
    },
    setSelectedGuest(state, action) {
        state.selectedGuest = action.payload;
    },
}

export default produce((state, action) =>
    createReducer(state, action, guests), initialState);