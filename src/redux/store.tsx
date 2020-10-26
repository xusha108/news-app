import { createStore } from 'redux';
import getArticles from './reducers/getArticles'

let initialStore = {news: []}
export default createStore(getArticles, initialStore);