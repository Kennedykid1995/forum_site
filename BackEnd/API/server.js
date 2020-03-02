const express = require('express');
const cors = require('cors');
const knex = require('knex');
const dbConfig = require('../knexfile');
const db = knex(dbConfig.development);  
const server = express();

server.use(express.json(), cors());

server.get('/', (req, res) => {
    res.send("Hello from Express")
});

//GET: 
//All Forums
server.get('/frontpage', (req, res) => {
    db('forum')
    .then(forum => res.status(200).json(forum))
    .catch(err => res.status(500).json(err));
})
//One Forum - All Posts in a Forum
server.get('/:title', (req, res) => {
    const {id} = req.params; 
    const {forum_id} = req.params;
    db('forum', 'post')
    .where({id}, {forum_id})
    .then(forum => res.status(200).json(forum))
    .then(post => res.status(200).json(post))
    .catch(err => res.satus(200).json(err))
})
//One Post within Forum All comments on Post
server.get('/:title/:post_title', (req, res) => {
    const {forum_id} = req.params;
    const {post_id} = req.params;
    db('post', 'comments')
    .where({forum_id}, {post_id})
    .then(post => res.status(200).json(post))
    .then(comment => res.status(200).json(comment))
    .catch(err => res.status(500).json(err))
})

//POST
//Forum
//Post
//Comment


module.exports = server; 
