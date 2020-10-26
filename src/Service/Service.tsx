import axios from 'axios';

export default  async function Service() {
  return await axios.get('https://test-api-app-for-react.herokuapp.com/api/v1/news')
}
