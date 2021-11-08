
import './App.css';

import React, { Component } from 'react'
import Nav from './componets/Nav';
import New from './componets/New';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  } from "react-router-dom";



export default class App extends Component {
  render() {
    return (
      <div>
   
     <Router>
      <Nav/>
   <Switch>
          <Route exact path="/"> <New key="general" pageSize={8}  country="in" category="general" /> </Route>
           
          <Route exact path="/business"> <New key="business" pageSize={8}  country="in" category="business" /> </Route> 
            <Route exact path="/entertainment">  <New key="entertainment" pageSize={8}  country="in" category="entertainment" /> </Route>
            <Route exact path="/general">  <New key="general" pageSize={8}  country="in" category="general" /> </Route>
           <Route exact path="/health">  <New key="health" pageSize={8}  country="in" category="health" /> </Route>
          <Route exact path="/science"> <New key="science" pageSize={8}  country="in" category="science" /> </Route>
          <Route exact path="/sports"> <New key="sports" pageSize={8}  country="in" category="sports" /> </Route>
          <Route exact path="/technology"> <New key="technology" pageSize={8}  country="in" category="technology" /> </Route>


          </Switch>
     
    
    
    
    
     </Router>
      </div>
    )
  }
}
