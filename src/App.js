import React, { Component } from 'react';
import Header from './components/header';
import Home from './components/home';
import StudList from './containers/students';
import AdminHome from './components/adminHome';
import StudForm from './containers/signup';
import Login from './containers/login';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
              <div>
                <Header/>
              </div>
                <div>
                    <Switch>
                        <Route exact path={'/'} component={Home}/>
                        <Route eaxct path={'/login'} component={Login}/>
                        <Route eaxct path={'/signup'} component={StudForm}/>
                        <Route eaxct path={'/admin'} component={AdminHome}/>
                        <Route eaxct path={'/student'} component={StudList}/>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
  }
}
export default App;
