/* eslint-disable import/no-anonymous-default-export */
import {ADD_TODO, REMOVE_TODO} from "./action.types"

export default  (state, action) => {
  switch (action) {
    case ADD_TODO:
      return[...state, action.payload];
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.paload)
    default:
    return state;
  }
}