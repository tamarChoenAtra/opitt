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
    newGuest: {
        name: '',
        carKind: '',
        carId: '',
    },
    selectedGuest: {
        id: 0,
        name: 'ישראל ישראלי',
        carKind: 'מיצובישי',
        carId: '013-45-123'
    },
    filteredGuestsList: [],
    searchGuest: false
}

const guests = {
    reset(state) {
        state = reset(state, initialState);
    },
    setGuestsList(state, action) {
        state.guestsList = action.payload;
    },
    setNewGuest(state, action) {
        state.newGuest = { ...state.newGuest, [action.payload.key]: action.payload.value }
    },
    setSelectedGuest(state, action) {
        state.selectedGuest = action.payload;
    },
    setFilteredGuestsList(state, action) {
        let tempGuestsList = [];
        let bool = false;
        state.guestsList.forEach(guest => {
            bool = false
            Object.keys(guest).forEach(key => {
                if (guest[key].toString().toLowerCase().indexOf(action.payload.toLowerCase()) > -1) {
                    bool = true
                    return
                }
            })
            if (bool) {
                tempGuestsList.push(guest)
            }
        })

        state.filteredGuestsList = tempGuestsList;

    },
    setSearchGuest(state, action) {
        if (action.payload == '')
            state.searchGuest = false
        else
            state.searchGuest = true

    },
    deleteGuest(state, action) {
        state.guestsList = state.guestsList.filter(guest =>
            guest.id !== state.selectedGuest.id
        )
    },
    addEntryCrt(state, action) {
        state.guestsList.unshift(state.newGuest);
        state.newGuest = initialState.newGuest
    }
}

export default produce((state, action) =>
    createReducer(state, action, guests), initialState);