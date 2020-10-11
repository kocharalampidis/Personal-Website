// libraries imports
import React, {Component} from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import './components/css/App.css';

// pages imports
import welcome from './Pages/welcome'
import CV from './Pages/CV'
import calendar from './Pages/calendar'


function App(){

  
    return (
      <BrowserRouter>
        <Switch> 
          <Redirect from="/" to="/welcome" exact />
          <Route path='/welcome' component={welcome}/>
          <Route path='/cv' component={CV}/>
          <Route path='/calendar' component={calendar}/>

        </Switch>
      </BrowserRouter>  
  
    );
  }


export default App;
