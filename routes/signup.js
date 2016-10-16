const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const bcrypt = require('bcrypt')

router.get('/', (req, res, next) => {
    res.render('signup')
});

router.post('/', (req, res, next) => {
    // bcrypt.hashSync(req.body.password, 12)
    const hashed_password = bcrypt.hashSync(req.body.password, 8)
        // .then((hashed_password) => {
        // console.log('req.body', req.body);
    knex('users')
        .insert({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            image: req.body.image,
            hashed_password: hashed_password
        }, '*')
        // })
        .then((user) => {
            console.log('user is', user);
            const id = user[0].id
                // console.log('the user id is ', id);
                // res.send('something happened')
            knex('users')
                .where('id', id)
                .first()
                .then((info) => {
                    req.session.userInfo = info
                        // console.log('cookie info', req.session.userInfo);
                    res.redirect('profile')
                })
                .catch((err) => {
                    next(err)
                })
        })
})

module.exports = router;
