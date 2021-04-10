import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Menu from "./Menu";
import HeaderBlock from "./HeaderBlock";
import Login from "./Login";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Signup from "./Signup";
import TeslaAccount from "./TeslaAccount";

function App() {
  const user = useSelector(selectUser);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            {isMenuOpen && <Menu />}
            <HeaderBlock />
          </Route>
          <Route path="/login">
            {user ? <Redirect to="/teslaaccount" /> : <Login />}
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/teslaaccount">
            {!user ? (
              <Redirect to="/login" />
            ) : (
              <>
              <TeslaAccount
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
              />
              {isMenuOpen && <Menu />}
              </>
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
