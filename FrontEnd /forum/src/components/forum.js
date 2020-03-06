import React, { Component } from 'react'
import { getForum, getPosts } from '../actions/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Forum extends Component {
    componentDidMount() {
        this.props.getForum()
    }
    render() {
        return (
            <div>
                {this.props.gettingForum ? (
                    window.onload()
                ) : (
                        console.log(this.props.singleForum)
                    )}
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { siteReducer } = state;
    return {
        gettingForum: siteReducer.gettingForum,
        singleForum: siteReducer.singleForum,
        gettingPosts: siteReducer.gettingPosts,
        posts: siteReducer.posts,
        error: siteReducer.error,
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

export default connect(mapStateToProps, { getForum })(Forum)
