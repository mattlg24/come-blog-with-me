'use strict'

exports.seed = function(knex, Promise) {
    return Promise.all([
        knex('posts').insert([{
            user_id: 1,
            title: 'This is a test!',
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        }]),
    ])
}
