import React, {Fragment} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Clients from "./pages/Clients/Clients";
import Client from "./pages/Client/Client";


const App = () => {
  return (
    <Router>
      <Header/>

      <Switch>
        <Route
          exact
          path='/'
          render={() => (
            <Fragment>
              <Clients/>
            </Fragment>
          )}
        />
        <Route path="/client/:id" component={Client}/>
      </Switch>

      <Footer/>
    </Router>
  );
};

export default App;
