exports.up = function(knex) {
    return knex.schema.createTable('users', function(table) {
        table.increments()
        table.string('first_name').notNullable()
        table.string('last_name').notNullable()
        table.string('image')
        table.specificType('hashed_password', 'char(60)').notNullable();
        table.timestamps(true, true)
    })
}

exports.down = function(knex) {
    return knex.schema.dropTable('users')
}
