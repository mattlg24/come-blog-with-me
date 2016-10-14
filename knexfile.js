'use strict';

module.exports = {
    development: {
        client: 'pg',
        connection: 'postgres://localhost/come_blog_with_me'
    },

    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL
    }
};
