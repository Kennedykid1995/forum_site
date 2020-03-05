import React, { Component } from 'react';
import AllForums from './components/allForums';
import { Route } from 'react-router-dom';
import Forum from './components/forum'; 

class App extends Component {
  render() {
    return (
      <div className="App">
          <Route
            exact path="/"
            component={AllForums}
          />
          <Route 
          path ="/:id"
          component={Forum}
          />
      </div>
    );
  }
}



export default (App);
