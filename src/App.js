import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/navBar";
import NumberVerifier from "./components/numberVerifier";
import SignInSuccess from "./components/signInSuccess";
import SignUpSuccess from "./components/signUpSuccess";
import SignInFail from "./components/signInFail";

function App() {
  return (
    <Router>
      <NavBar />
      <div>
        <Switch>
          <Route path="/success-signin" exact component={SignInSuccess} />
          <Route path="/success-signup" exact component={SignUpSuccess} />
          <Route path="/fail-signin" exact component={SignInFail} />
          <Route
            path="/signup"
            exact
            render={(props) => <NumberVerifier mode="Sign Up" {...props} />}
          />
          <Route
            Path="/signin"
            exact
            render={(props) => <NumberVerifier mode="Sign In" {...props} />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
