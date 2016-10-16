var express = require('express');
var router = express.Router();
var knex = require('../db/knex')

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('writepost')
});


router.post('/', function(req, res, next) {
    // console.log('req.body is', req.body);
    // console.log('req.session.userInfo.id is', req.session.userInfo.id);
    knex('posts')
        .insert({
            user_id: req.session.userInfo.id,
            title: req.body.title,
            body: req.body.body,
        })
        .then(() => {
            res.redirect('/posts')
        })
});

module.exports = router;;
