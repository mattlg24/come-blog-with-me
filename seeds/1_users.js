'use strict'

exports.seed = function(knex, Promise) {
    return Promise.all([
        knex('users').insert([{
            first_name: 'Matt',
            last_name: 'Gardner',
            email: 'matt@gmail.com',
            image: 'http://www.fillmurray.com/200/300',
            hashed_password: 'test'
        }]),
    ])
}
