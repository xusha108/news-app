import React from 'react';
import { Provider } from "react-redux";
import store from "./redux/store";
import HomeContainer from './Components/HomeContainer';

const App: React.FC = () => {
  return (   
    <Provider store={store}>       
      <HomeContainer 
        news = {[]}
        remove = {() => {}}
        add = {() => {}}
        saveToStore = {() => {}}
      />        
    </Provider>    
  );
}
export default App;

