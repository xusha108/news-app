let initialState = {news: []}

const ActionTypes = { GET_NEWS: 'GET_NEWS', REMOVE_NEWS: 'REMOVE_NEWS'}

export default  (state = initialState, action:any) => {
  const { GET_NEWS, REMOVE_NEWS } = ActionTypes  

  switch (action.type) {

    case GET_NEWS:    
  
      return {        
        ...state,
        news: action.payload,
      };
      case REMOVE_NEWS:

      let newState = {
        news: state.news,
      }
      let index: number = 0;
      for (let i=0; i < newState.news.length; i++) {
        if (action.payload.id === newState.news[i]) {
          index = i;
          break;
        }
      }     
      newState.news.splice( index, 1);
      
      return newState;
         
    default:
       return state;
  } 
}
