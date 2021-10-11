import produce, { current } from 'immer';
import createReducer from './reducerUtils';
import { reset } from './appReducers';
import { actions } from '../actions';

const initialState = {
   // notificationsList:[],
   activeDailyParking: false,
   activeHourlyParking: false,
   emptyParkingList: [
      {
         _id: '0',
         fromDay: 'ראשון',
         toDay: 'שני',
         fromHour: '08:00',
         toHour: '21:00',
         family: 'כהן',
         numParking: '5',
         floor: ' 1',
      },
      {
         _id: '1',
         fromDay: 'ראשון',
         toDay: 'שני',
         fromHour: '08:00',
         toHour: '21:00',
         family: 'לוי',
         numParking: '2',
         floor: 'מינוס 1',
      }
   ],
   reservedParkingsList: [
      {
         _id: '0',
         fromDay: 'ראשון',
         toDay: 'שני',
         fromHour: '08:00',
         toHour: '21:00',
         family: 'כהן',
         numParking: '5',
         floor: ' 1',
      },
      {
         _id: '1',
         fromDay: 'ראשון',
         toDay: 'שני',
         fromHour: '08:00',
         toHour: '21:00',
         family: 'לוי',
         numParking: '2',
         floor: 'מינוס 1',
      }
   ],
   propertiesList: [
      {
         index: 0,
         item: "Rabi Akiva 10 Beni Brak",
      },
      // {
      //    index: 1,
      //    item: "ביבא לת ,22 דלישטור",
      // }
   ],
   selectedParking: {},
   requestForParking: {
      userId: '',
      fromHour: 0,
      toHour: 0,
      when: ''
   }
}

const parkings = {
   reset(state) {
      state = reset(state, initialState);
   },
   setEmptyParkingList(state, action) {
      state.emptyParkingList = action.payload;
   },
   setActiveDailyParking(state, action) {
      state.activeDailyParking = action.payload;
   },
   setActiveHourlyParking(state, action) {
      state.activeHourlyParking = action.payload;
   },
   setReservedParkingsList(state, action) {
      state.reservedParkingsList = action.payload;
   },
   setPropertiesList(state, action) {
      state.propertiesList = action.payload;
   },
   setSelectedParking(state, action) {
      state.selectedParking = action.payload;
   },
   saveParkingForGuest(state, action) {
      state.emptyParkingList = state.emptyParkingList.filter(emptyParking =>
         emptyParking._id !== state.selectedParking._id
      )
   },
   setRequestForParking(state, action) {
      let tempReq = state.requestForParking;
      state.requestForParking = { ...tempReq, [action.payload.key]: action.payload.value }
   }
}

export default produce((state, action) =>
   createReducer(state, action, parkings), initialState);