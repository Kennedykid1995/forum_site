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
    db('forums')
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
    .catch(err => res.satus(200).json(err))
})
server.get('/:title', (req, res) => {
    const {forum_id} = req.params;
    db('post')
    .where({forum_id})
    .then(post => res.status(200).json(post))
    .catch(err => res.satus(200).json(err))
})
//One Post within Forum - All comments on Post
server.get('/:title/:post_title', (req, res) => {
    const {forum_id} = req.params;
    db('post')
    .where({forum_id}, {post_id})
    .then(post => res.status(200).json(post))
    .catch(err => res.status(500).json(err))
})
server.get('/:title/:post_title', (req, res) => {
    const {post_id} = req.params;
    db('comments')
    .where({post_id})
    .then(comment => res.status(200).json(comment))
    .catch(err => res.status(500).json(err))
})

//POST
//Forum
server.post('/frontpage', (req, res) => {
    const forum = req.body;
    const {title} = req.body; 
    const {description} = req.body;
    if(!title & !description){
        res
        .status(400)
        .json({errorMessage: "NEED TITLE/DESCRIPTION"})
    }
    console.log(forum)
    db.insert(forum)
        .into('forums')
        .then(ids => {
            res.status(201).json(ids);
        })
        .catch(err => res.status(500).json(err))
})
//create a post onto a forum
server.post('/:title', (req, res) => {
    const post = req.body;
    const {post_title} = req.body; 
    const {post_content} = req.body;
    if(!post_title & !post_content){
        res
        .status(400)
        .json({errorMessage: "NEED TITLE/DESCRIPTION"})
    }
    db.insert(post)
        .into('post')
        .then(ids => {
            res.status(201).json(ids);
        })
        .catch(err => res.status(500).json(err))
})
//Post
//Comment


module.exports = server; 
