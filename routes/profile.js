var express = require('express');
var router = express.Router();
var knex = require('../db/knex')

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log('cookie stuff', req.session.userInfo);
    knex('users')
        .where('id', req.session.userInfo[0].id)
        .then((profile) => {
            console.log('profile is', profile);
            res.render('profile', {
                profile: profile,
                first_name: profile[0].first_name,
                last_name: profile[0].last_name,
                image: profile[0].image
            })
        })
});

module.exports = router;
