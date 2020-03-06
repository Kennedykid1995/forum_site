import axios from 'axios'; 

export const ERROR = 'ERROR';
export const GETTINGFORUMS = 'GETTINGFORUMS';
export const GETFORUMS = 'GETFORUMS';
export const GETTINGPOSTS = 'GETTINGPOSTS';
export const GETPOSTS = 'GETPOSTS';
export const GETTINGCOMMENTS = 'GETTINGCOMMENTS';
export const GETCOMMENTS = 'GETCOMMENTS';
export const GETTINGFORUM = 'GETTINGFORUM';
export const GETFORUM = 'GETFORUM';
export const GETTINGPOST = 'GETTINGPOST';
export const GETPOST = 'GETPOST';

const url = window.location.pathname;
const id = url.substring(url.lastIndexOf("/") + 1);
console.log(id)

const forumsURL = "http://localhost:4000/frontpage"; //all forums
const forumURL = `http://localhost:4000/forum/${id}`; //single forum all posts
const postURL = `http://localhost:4000/post/${id}`; //single post all comments 


//actions
export const getForums = () => {
    const forums = axios.get(`${forumsURL}`);
    return dispatch => {
        dispatch({ type: GETTINGFORUMS });
        forums
        .then(response => {
            console.log(response.data); 
            dispatch({type: GETFORUMS, payload: response.data})
        })
        .catch(err => {
            dispatch({type: ERROR, payload: err});
        })
    }
}


export const getForum = () => {
    function reloadPage(){
        window.location.reload(true); 
    } 
    const forum = axios.get(`${forumURL}`);
    console.log(forum, "forums"); 
    return dispatch => {
        dispatch({type: GETTINGFORUM});
        forum
        .then(response => {
            console.log(response.data)
            dispatch({type: GETFORUM, payload: response.data})
        })
        .catch(err => {
            dispatch({type: ERROR, payload: err})
        })
    }
}
// export const getPosts = () => {
//     const posts = axios.get(`${forumURL}`);
//     return dispatch => {
//         dispatch({type: GETTINGPOSTS});
//         posts
//         .then(response => {
//             console.log(response.data)
//             dispatch({type: GETPOSTS, payload: response.data})
//         })
//         .catch(err => {
//             dispatch({type: ERROR, payload: err})
//         })
//     }
// }