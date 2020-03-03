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
server.get('/frontpage', async (req, res) => {
    try {
        const data = await db('forums')
        res.json(data);
    } catch (err) {
        res.status(500).json(err)
    }
})
//One Forum - All Posts in a Forum
server.get('/:id', async (req, res) => {
    // const { id } = req.params;
    // db('forums')
    //     .where({ id })
    //     .then(forum => res.status(200).json(forum))
    //     .catch(err => res.status(500).json(err))
    try{
        const { id } = req.params;
        const data = await db('forums').where({id});
        res.json(data);
    } catch(err){
        res.status(500).json(err); 
    }
    
})

server.get('/:id', (req, res) => {
    const { id } = req.params;
    db('forum_post')
        .where({ id })
        .send("POSTS")
        .then(post => res.status(200).json(post))
        .catch(err => res.status(500).json(err))
})
// One Post within Forum - All comments on Post

//POST
//Forum
server.post('/frontpage', (req, res) => {
    const forum = req.body;
    const { title } = req.body;
    const { description } = req.body;
    if (!title & !description) {
        res
            .status(400)
            .json({ errorMessage: "NEED TITLE/DESCRIPTION" })
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
    const { post_title } = req.body;
    const { post_content } = req.body;
    if (!post_title & !post_content) {
        res
            .status(400)
            .json({ errorMessage: "NEED TITLE/DESCRIPTION" })
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
