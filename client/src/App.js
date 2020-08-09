import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Welcome from "./Welcome";
// Осында token ды import жасау керек чтоб, приватный кылып кою ушин линкты
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route path="/">
          <Welcome />
        </Route>
        {/* if(token) , then show me the home page, else redirect to <Route path="/login">Login</Route> */}
      </Switch>
    </Router>
  );
}

export default App;
