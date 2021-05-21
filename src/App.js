import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import ElementDetail from './components/ElementDetail/ElementDetail';

function App() {
  return (
    <div>
    <Router className="App">
      <Switch>

        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route exact path="/home">
          <Home></Home>
        </Route>

        <Route exact path="/home/elementDetail/:id">
          <ElementDetail></ElementDetail>
        </Route>


        <Route path="*">
          <NotFound></NotFound>

        </Route>

      </Switch>

     
      </Router>
    </div>
  );
}

export default App;
