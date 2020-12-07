import React from "react";
import Nav from "./navigation/NavBar";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Home from "./components/Home"
import Login from "./components/Login";
import Register from "./components/Register";
import LeaderBoard from "./components/LeaderBoard";
function App(props) {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Nav />
            <Switch>
            <Route path="/" component={Home} exact={true} />
              <Route path="/login" component={Login} exact={true} />
              <Route path="/register" component={Register} exact={true} />
              <Route path="/leaderBoard" component={LeaderBoard} exact={true} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
}

export default App;