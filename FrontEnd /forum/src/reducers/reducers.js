import * as actionTypes from '../actions/actions';

const initialState = {
    forums: [],
    posts: [],
    comments: [],
    singleForum: [],
    post: [],
    gettingForums: false,
    gettingPosts: false,
    gettingComments: false,
    gettingForum: false,
    gettingPost: false,
    error: null
};

export const siteReducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.GETTINGFORUMS:
            return { ...state, gettingForums: true }
        case actionTypes.GETFORUMS:
            return { ...state, forums: action.payload, gettingForums: false }

        case actionTypes.GETTINGPOSTS:
            return { ...state, gettingPosts: true }
        case actionTypes.GETPOSTS:
            return { ...state, posts: action.payload, gettingPosts: false }

        case actionTypes.GETTINGCOMMENTS:
            return { ...state, gettingComments: true }
        case actionTypes.GETCOMMENTS:
            return { ...state, comments: action.payload, gettingComments: false }

        case actionTypes.GETTINGFORUM:
            return { ...state, gettingForum: true }
        case actionTypes.GETFORUM:
            return { ...state, singleForum: action.payload, gettingForum: false }

        case actionTypes.GETTINGPOST:
            return { ...state, gettingPost: true }
        case actionTypes.GETPOST:
            return { ...state, post: action.payload, gettingPost: false }

        case actionTypes.ERROR:
            return {
                ...state,
                gettingForums: false,
                gettingPosts: false,
                gettingComments: false,
                gettingForum: false,
                gettingPost: false,
                error: action.payload,
            };
        default:
            return state
    }
}
