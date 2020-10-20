let initialState = {news: []}

const ActionTypes = { GET_NEWS: 'GET_NEWS'}

export default  (state = initialState, action:any) => {
  const { GET_NEWS }= ActionTypes  

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
