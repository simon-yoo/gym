/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries

  await knex('locations').insert([
    {
      id: 1,
      location: 'New York',
      address: '123 avcd road, New York, USA',
      phone: '0123456789',
      email: 'abcd123@abc.com',
      image: '/client/public/photos/location/newyork.jpeg',
    },
    {
      id: 2,
      location: 'Los Angeles',
      address: '123 avcd road, Los Angeles, USA',
      phone: '0123456789',
      email: 'abcd123@abc.com',
      image: '/client/public/photos/location/logangeles.jpeg',
    },
    {
      id: 3,
      location: 'California',
      address: '123 avcd road, California, USA',
      phone: '0123456789',
      email: 'abcd123@abc.com',
      image: '/client/public/photos/location/california.jpeg',
    },
    {
      id: 4,
      location: 'Seoul',
      address: '123 avcd road, Seoul, South Korea',
      phone: '0123456789',
      email: 'abcd123@abc.com',
      image: '/client/public/photos/location/seoul3.jpeg',
    },
    {
      id: 5,
      location: 'Tokyo',
      address: '123 avcd road, Tokyo, Japan',
      phone: '0123456789',
      email: 'abcd123@abc.com',
      image: '/client/public/photos/location/tokyo.jpeg',
    },
    {
      id: 6,
      location: 'Singapore',
      address: '123 avcd road, Singapore, Singapore',
      phone: '0123456789',
      email: 'abcd123@abc.com',
      image: '/client/public/photos/location/singapore.jpeg',
    },
    {
      id: 7,
      location: 'Paris',
      address: '123 avcd road, Paris, France',
      phone: '0123456789',
      email: 'abcd123@abc.com',
      image: '/client/public/photos/location/paris1.jpeg',
    },
    {
      id: 8,
      location: 'London',
      address: '123 avcd road, London, England',
      phone: '0123456789',
      email: 'abcd123@abc.com',
      image: '/client/public/photos/location/london.jpeg',
    },
    {
      id: 9,
      location: 'Madrid',
      address: '123 avcd road, Madrid, Spaiin',
      phone: '0123456789',
      email: 'abcd123@abc.com',
      image: '/client/public/photos/location/madrid.jpeg',
    },
  ])
}
