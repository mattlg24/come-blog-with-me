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

router.get('/:id', (req, res) => {
    // console.log('req', req);
    // console.log('req.params', req.params);
    // console.log('req.query', req.query);

    // console.log('req.session haha', req.session.userInfo);
    // knex('posts')
    //     .join('users', 'users.id', 'posts.user_id')
    //     .where()
})

module.exports = router;

// getOnePost(id) {
//         return knex('posts')
//             .join('users', 'posts.user_id', 'users.id')
//             .select('posts.id as postId', 'users.id as userId', 'users.image_url as userImage', 'users.first_name as firstName', 'users.last_name as lastName', 'posts.title as title', 'posts.body as postBody', 'posts.image_url as postImage')
//             .where('posts.id', id.toString()).first()
//     },
//     createOnePost(post) {
//         return knex('posts').insert(post)
//     },
//     updateOnePost(id, newPost) {
//         return knex('posts').select()
//             .where('id', id).first()
//             .then(function(post) {
//                 return knex('posts')
//                     .update({
//                         title: newPost.title || post.title,
//                         body: newPost.body || post.body,
//                         image_url: newPost.image_url || post.image_url,
//                     }).where('posts.id', id)
//             })
//     },
//     deleteOnePost(id) {
//         return knex('posts').del()
//             .where('posts.id', id)
// }
