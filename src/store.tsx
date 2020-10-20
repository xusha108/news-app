import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers/rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';


const composeEnhancers = composeWithDevTools(applyMiddleware(thunk));

const configureStore = () => {

  return createStore(
    rootReducer,
    composeEnhancers
  );
};

const store = configureStore();

export default store;