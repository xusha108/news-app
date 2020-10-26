import {State} from '../../interfaces/interfaces';

const ActionTypes = { GET_NEWS: 'GET_NEWS', REMOVE_NEWS: 'REMOVE_NEWS', ADD_ARTICLE:'ADD_ARTICLE'}

export default  (state: any, action: any) => {
  const { GET_NEWS, REMOVE_NEWS, ADD_ARTICLE } = ActionTypes  

  switch (action.type) {
    case GET_NEWS:      
      return {        
        ...state,
        news: action.payload,
      };

    case REMOVE_NEWS:
      let newState:State  = {
        ...state,
        news: [...state.news]
      }
      let index: number = -1;
      for (let i=0; i < newState.news.length; i++) {        
        if (action.payload === newState.news[i].id) {
          index = i;
          break;
        }
      }     
      newState.news.splice( index, 1);      
      return newState;
  
      case ADD_ARTICLE:
        const newStore = {
          ...state,
          news: [...state.news, action.payload]
        }
        
        return newStore;

    default:
       return state;
  } 
}
