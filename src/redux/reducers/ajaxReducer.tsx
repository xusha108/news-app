import { GET_NEWS } from "../actions/types";

let initialState = {news: []}

export default  (state = initialState, action:any) => {
  switch (action.type) {
    case GET_NEWS:
      return {
        ...state,
        news: action.payload,
      };      
    default:
      return state;
  }
}