import { SELECT_COUNTRY } from '../constants/ActionTypes'
import countries from 'json!./data.json';

const initialState = {
  countries,
  selected: {},
  year: 2016
}

export default function actions(state = initialState, action) {
  switch (action.type) {
    case SELECT_COUNTRY:
      state.selected = action.key; 
      console.log(state);
      return Object.assign({}, state);
    default:
      return state
  }
}
