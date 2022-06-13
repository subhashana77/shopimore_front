import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path='/'>
            <Register/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
