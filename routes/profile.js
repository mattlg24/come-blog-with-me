var express = require('express');
var router = express.Router();
var knex = require('../db/knex')

/* GET users listing. */
router.get('/', function(req, res, next) {
    // console.log('cookie stuff', req.session.userInfo);
    knex('users')
        .join('posts', 'posts.user_id', 'users.id')
        .where('posts.user_id', req.session.userInfo.id)
        .then((profile) => {
            console.log('req.session.userInfo is', req.session.userInfo);
            var postInfo = profile
            console.log('profile is', postInfo);
            res.render('profile', {
                profile: profile,
                first_name: req.session.userInfo.first_name,
                last_name: req.session.userInfo.last_name,
                image: req.session.userInfo.image,
                title: profile[0].title,
                body: profile[0].body
            })
        })

});

module.exports = router;
