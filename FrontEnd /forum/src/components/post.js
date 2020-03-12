import React, { Component } from 'react'
import {getPost} from '../actions/actions'; 
import {connect} from 'react-redux'; 
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    title: {
        fontSize: 14, 
    },
    content: {
        fontSize: 12,
    }
})


class Post extends Component {
    componentDidMount(){
        this.props.getPost();
    }
    render() {
        const classes = useStyles(); 
        const postData = this.props.post
        return (
            <div>
                {this.props.gettingPost ? (
                    window.onload()
                ) : (
                    Object.keys(postData).map((key) => {
                        return(
                            <div key={key}>
                                {postData[key].map((data) => {
                                    return(
                                        <div>
                                            <Typography className={classes.title} key={data.id}>{data.post_title} </Typography>
                                            <span>{data.post_content}</span>
                                            <section>
                                                <span>{data.comment_content}</span>
                                            </section>
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
