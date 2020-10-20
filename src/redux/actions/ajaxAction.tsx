import axios from 'axios';

export const getNews = () => async (dispatch:any) => {
  axios
  .get('https://test-api-app-for-react.herokuapp.com/api/v1/news')
  .then(res => {
    const data = res.data
    console.log('news', data)
    dispatch({
            type: "GET_NEWS",
            payload: data.arlicles
          });
          return;
  })
  .catch((error) => {
    console.log(error)
})
}