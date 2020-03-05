import React, { Component } from 'react'
import { getForums } from '../actions/actions'; 
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'; 


class AllForums extends Component {
    componentDidMount() {
        this.props.getForums();
    }

    render() {
        return (
            <div>
                {this.props.gettingForums ? (
                    <h1>Loading...</h1>
                ) : (
                        this.props.forums.map(forum => {
                            return (
                                <div key={forum.id}>
                                <Link to={`/${forum.id}`}>{forum.title}</Link>
                                <h3>{forum.description}</h3>
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
        forums: siteReducer.forums,
        error: siteReducer.error,
        gettingForums: siteReducer.gettingForums
    }
}

export default connect (mapStateToProps, {getForums}) (AllForums); 