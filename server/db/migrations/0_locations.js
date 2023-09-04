/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('locations', (table) => {
    table.increments('id').primary()
    table.string('location')
    table.string('address')
    table.integer('phone')
    table.string('email')
    table.string('image')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('locations')
}
