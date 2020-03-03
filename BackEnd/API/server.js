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
    try {
        const { id } = req.params;
        const data = await db('forums').where({ id });
        res.json(data);
    } catch (err) {
        res.status(500).json(err);
    }

})
// One Post within Forum - All comments on Post

//POST
//Forum
server.post('/frontpage', async (req, res) => {
    try {
        const forum = req.body;
        const { title, description } = req.body;
        const create = await db.insert(forum).into('forums')
        if (!title & !description) {
            res.status(400).json({ errorMessage: "NEED TITLE/DESCRIPTION" })
        } else res.status(201).json(create);
    } catch (err) {
        res.status(500).json(err);
    }
})

//create a post onto a forum

server.post('/:id', async (req, res) => {
    try {
        const forum = await db('forums')
        const post = req.body;
        const { post_title, post_content } = req.body;
        const create = await db.insert(post).into('forum_post');
        const intoForum = await db.insert(create).into(forum);
        if (!post_title & !post_content) {
            res.status(400).json({ errorMessage: "NEED TITLE/CONTENT!" })
        } else {
            console.log(create);
            res.status(200).json(intoForum)
        }
    } catch (err) {
        console.log(err, req.params); 
        res.status(500).json(err)
    }
})
//Post
//Comment


module.exports = server; 
