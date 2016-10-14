const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/', (req, res, next) => {
    res.render('signup')
});

router.post('/', (req, res, next) => {
    // console.log('req.body', req.body);
    knex('users')
        .insert({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            image: req.body.image,
            hashed_password: req.body.password
        }, '*')
        .then((user) => {
            const id = user[0].id
                // console.log('the user is id ', id);
                // res.send('something happened')
            knex('users')
                .where('id', id)
                .then((info) => {
                    req.session.userInfo = info
                        // console.log('cookie info', req.session.userInfo);
                    res.redirect('profile')
                })
        })
})

module.exports = router;
