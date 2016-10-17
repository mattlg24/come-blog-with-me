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
    console.log('req.params is', req.params);
    // res.status(200).send('you made it to the /posts/:id route. the id is ' + req.params.id)
    knex('posts')
        // .join('posts', 'posts.user_id', 'users.id')
        .where('id', req.params.id)
        .then((onePost) => {
            console.log('onePost is', onePost);
            res.render('one', {
                onePost: onePost,
                title: onePost[0].title,
                body: onePost[0].body
            })
        })
        // console.log('req.params', req.params);
        // console.log('req.query', req.query);
        // console.log('post stuff req.params', req.params);
        //     })
})

router.delete('/:id', (req, res, next) => {
    console.log('req.body is', req.body);
})

module.exports = router;




// getOnePost(id){
//     return knex('posts')
//     .join('users', 'posts.user_id', 'users.id')
//     .select('posts.id as postId', 'users.id as userId', 'users.image_url as userImage', 'users.first_name as firstName', 'users.last_name as lastName', 'posts.title as title', 'posts.body as postBody', 'posts.image_url as postImage')
//     .where('posts.id', id.toString()).first()
//   }
//   }
