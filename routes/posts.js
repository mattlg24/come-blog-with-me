var express = require('express');
var router = express.Router();
var knex = require('../db/knex')

/* GET users listing. */
router.get('/', function(req, res, next) {
    knex('posts')
        .join('users', 'users.id', 'posts.user_id')
        // .orderBy('created_at', 'asc')
        .then((posts) => {
            // console.log('posts are', posts);
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

// router.get('/:id', (req, res) => {
//     res.send('you made it to the /posts/:id route. the id is ', req.params.id)
// console.log('req', req);
// console.log('req.params', req.params);
// console.log('req.query', req.query);

// console.log('req.session haha', req.session.userInfo);
// knex('posts')
//     .join('users', 'users.id', 'posts.user_id')
//     .where()
// })

module.exports = router;
