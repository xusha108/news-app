import axios from 'axios';

export const getNews = () => async (dispatch:any) => {
  axios
  .get('https://test-api-app-for-react.herokuapp.com/api/v1/news')
  .then(res => {
    const data = res.data.data.articles
    console.log('articles', data)
    dispatch({
            type: "GET_NEWS",
            payload: data
          });
          return;
  })
  .catch((error) => {
    console.log(error)
  })
}