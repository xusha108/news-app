import React from 'react';
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home';


const App: React.FC = () => {
  return (   
    <Provider store={store}>
       <Router>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </Provider>    
  );
}
export default App;

