import React, { Component } from 'react'
import { getForum, getPosts } from '../actions/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Forum extends Component {
    componentDidMount() {
        this.props.getForum()
    }
    render() {
        const forumData = this.props.singleForum
        return (
            <div>
                {this.props.gettingForum ? (
                    window.onload()
                ) : (
                        Object.keys(forumData).map((key) => {
                            return (
                                <div key={key}>
                                    {forumData[key].map((data) => {
                                        return (
                                            <div>
                                                <span key={data.id}>{data.title}</span>
                                                <span key={data.id + data.forum_id}>
                                                    <Link to={`/forum/${data.post_title}/${data.id}`}>{data.post_title}</Link> : {data.post_content}                                                      {data.post_content}
                                                </span>
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })
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
