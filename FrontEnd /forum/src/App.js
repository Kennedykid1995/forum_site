import React, { Component } from 'react';
import AllForums from './components/allForums';
import { Route } from 'react-router-dom';
import Forum from './components/forum'; 
import Post from './components/post'
class App extends Component {
  render() {
    return (
      <div className="App">
          <Route
            exact path="/"
            component={AllForums}
          />
          <Route 
          exact path ="/:title/:id"
          component={Forum}
          />
          <Route 
          exact path ="/:title/:title/:id"
          component={Post}
          />
      </div>
    );
  }
}



export default (App);
