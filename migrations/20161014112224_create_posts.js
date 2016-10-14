exports.up = function(knex) {
    return knex.schema.createTable('posts', function(table) {
        table.increments()
        table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
        table.string('title')
        table.text('body')
        // table.dateTime('created_at')
        table.timestamps(true, true)
    })
}

exports.down = function(knex) {
    return knex.schema.dropTable('posts')
}
