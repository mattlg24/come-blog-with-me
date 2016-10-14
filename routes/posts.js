var express = require('express');
var router = express.Router();
var knex = require('../db/knex')

/* GET users listing. */
router.get('/', function(req, res, next) {
    knex('posts')
        .join('users', 'users.id', 'posts.user_id')
        // .orderBy('created_at', 'asc')
        .then((posts) => {
            console.log('posts are', posts);
            res.render('posts', {
                posts: posts,
                first_name: posts.first_name,
                last_name: posts.last_name,
                title: posts.title,
                body: posts.body,
                created: posts.created_at
            })
        })
});

module.exports = router;
