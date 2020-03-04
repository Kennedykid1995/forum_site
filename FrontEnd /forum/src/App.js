import React, {Component} from 'react';
import './App.css';
import {getForums} from './actions/actions';
import {connect} from 'react-redux'; 

class App extends Component{
  componentDidMount(){
    this.props.getForums();
  }

  render() {
    return (
      <div className="App">
        Forums
        {this.props.gettingForums ? (
          <h1>Loading...</h1>
        ): (
          this.props.forums.map(forum => {
            return(
              <h2 key={forum.id}>{forum.title}</h2>
            )
          })
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { siteReducer } = state; 
  return {
    forums: siteReducer.forums,
    error: siteReducer.error,
    gettingForums: siteReducer.gettingForums
  }
}

export default connect (mapStateToProps, {getForums})(App);
