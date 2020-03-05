// import React, { Component } from 'react'
// import {getForum} from '../actions/actions';
// import {connect} from 'react-redux';
// import {Link} from 'react-router-dom'; 

// class Forum extends Component {
//     componentDidMount(){
//         this.props.getForum()
//         }
//     render() {
//         return (
//             <div>
//                 Forum Page
//             </div>
//         )
//     }
// }

// const mapStateToProps = state => {
//     const {siteReducer} = state;
//     return{
//         gettingForum: siteReducer.gettingForum,
//         forum: siteReducer.forum,
//         gettingPosts: siteReducer.gettingPosts,
//         posts: siteReducer.posts,
//         error: siteReducer.error,
//     }
// }

// export default connect (mapStateToProps,{getForum})(Forum)
