import * as db from '../db/db'
import express from 'express'

const router = express.Router()

// Read
router.get('/', async (req, res) => {
  try {
    console.log("router!");
    
    const locations = await db.getLocations()
    res.json(locations)
  } catch (error) {
    console.log(error)
    res.status(500).send('Something went wrong')
  }
})


export default router