import React, { Component } from 'react'
import {getPost} from '../actions/actions'; 
import {connect} from 'react-redux'; 

class Post extends Component {
    componentDidMount(){
        this.props.getPost();
    }
    render() {
        return (
            <div>
                Post / Comments 
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {siteReducer} = state;
    return{
        gettingPost: siteReducer.gettingPost,
        post: siteReducer.post,
        error: siteReducer.error
    }
}
window.onload = function () {
    //considering there aren't any hashes in the urls already
    if (!window.location.hash) {
        //setting window location
        window.location = window.location + '#loaded';
        //using reload() method to reload web page
        window.location.reload();
    }
}

export default connect(mapStateToProps, { getPost })(Post)
