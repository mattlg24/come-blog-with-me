var express = require('express');
var router = express.Router();
var knex = require('../db/knex')

router.get('/', function(req, res, next) {
    // console.log('cookie stuff', req.session.userInfo);
    knex('users')
        .join('posts', 'posts.user_id', 'users.id')
        .where('posts.user_id', req.session.userInfo.id)
        .then((profile) => {
            // console.log('req.session.userInfo is', req.session.userInfo);
            var postInfo = profile
                // console.log('profile is', postInfo);
            res.render('profile', {
                profile: profile,
                first_name: req.session.userInfo.first_name,
                last_name: req.session.userInfo.last_name,
                image: req.session.userInfo.image,
                // title: profile[0].title,
                // body: profile[0].body
            })
        })
});

router.get('/:id', (req, res) => {
    // console.log('req.params is', req.params);
    // res.status(200).send('you made it to the /posts/:id route. the id is ' + req.params.id)
    knex('posts')
        // .join('posts', 'posts.user_id', 'users.id')
        .where('id', req.params.id)
        .then((onePost) => {
            console.log('onePost is', onePost);
            res.render('one', {
                onePost: onePost,
                title: onePost[0].title,
                body: onePost[0].body,
            })
        })
})

router.put('/:id', (req, res, next) => {
    knex('posts')
        .where('id', req.body.theId)
    then((post) => {
        console.log('post info is', post);
        // return knex('posts')
        // .update({
        //     title: ,
        //     body: ,
        // })
        // .where('posts.id', req.body.theID)
    })
})

router.delete('/:id', (req, res, next) => {
    return knex('posts')
        .del()
        .where('id', req.body.theID)
        .then(() => {
            res.redirect('profile')
        })
})

module.exports = router;;
