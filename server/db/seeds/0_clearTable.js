export async function seed(knex) {
  await knex('locations').del()
}
