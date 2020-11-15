const mongoose = require('mongoose')
const express = require('express')

const router = express.Router()

const { getMovies, getMovie, addMovie, deleteMovie } = require('./controller')



router.get('/', getMovies)
router.get('/:movie', getMovie)
router.post('/', addMovie)
router.delete('/:movie', deleteMovie)

module.exports = router
