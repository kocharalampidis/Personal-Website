// libraries imports
import React, { Fragment } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

// components/css import
import './components/css/App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// pages imports
import welcome from './Pages/welcome'
import mybio from './Pages/mybio'
import calendar from './Pages/calendar'

function App(){

  
    return (
      <Fragment class="flex flex-col min-h-screen">
        <main class="flex-grow">
            <BrowserRouter>
              <Navbar/>
                <Switch> 
                  <Redirect from="/" to="/welcome" exact />
                  <Route path='/welcome' component={welcome}/>
                  <Route path='/mybio' component={mybio}/>
                  <Route path='/calendar' component={calendar}/>
                </Switch>
          </BrowserRouter>  
        </main>
        
      </Fragment>
    );
  }


export default App;
