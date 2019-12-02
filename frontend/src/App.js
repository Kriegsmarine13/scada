import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Admin from './pages/Admin';
import Login from "./pages/Login";
import Home from "./pages/Home";
import { AuthContext} from "./context/auth";
import logo from './logo.svg';
import './App.css';
import './css/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App(props) {
  const [authTokens, setAuthTokens] = useState();

  const setTokens = (data) => {
    localStorage.setItem("token", JSON.stringify(data));
    setAuthTokens(data);
  }

  return (
      <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
          <Router>
              <div>
                  <PrivateRoute path="/admin" component={Admin} />
                  <Route exact path="/login" component={Login} />
                  <PrivateRoute path="/home" component={Home}/>
              </div>
          </Router>
      </AuthContext.Provider>
  );
}

export default App;
