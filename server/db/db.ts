import connection from './connection'

export async function getLocations(db = connection) {
    return await db('locations').select()
  }
  