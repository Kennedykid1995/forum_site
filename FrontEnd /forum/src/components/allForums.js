import React, { Component } from 'react'
import { getForums } from '../actions/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TopPage = styled.div`
    display: flex; 
    flex-direction: row; 
    justify-content: space-between; 
    align-content: center; 
    padding: 10px; 
`
const Holder = styled.div`
    border: 1px solid black;
    display: flex; 
    flex-direction: column; 
    flex-wrap: wrap; 
`
const Forum = styled.div`
    border: 1px solid red; 
    margin: 10px; 
    padding: 5px; 
`
const ForumLink = styled(Link)`
    color: black; 
    text-decoration: none;
    font-weight: bold; 
`
const Input = styled.input`
    height: 25px; 
`
const ProfileImg = styled.div`
    border-radius: 50px; 
    background: red; 
    width: 30px;
    height: 30px;  
`

class AllForums extends Component {
    componentDidMount() {
        this.props.getForums();
    }

    render() {
        return (
            <Holder>
                <TopPage>
                    <Input
                        type="text"
                        name="search"
                    />
                    <ProfileImg />
                </TopPage>
                {this.props.gettingForums ? (
                    <h1>Loading...</h1>
                ) : (
                        this.props.forums.map(forum => {
                            return (
                                <Forum key={forum.id}>
                                    <ForumLink to={`/${forum.title}/${forum.id}`}>{forum.title}</ForumLink>
                                    <div>{forum.description}</div>
                                </Forum>
                            )
                        })
                    )}
            </Holder>
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

export default connect(mapStateToProps, { getForums })(AllForums); 