const express = require('express')
const router = express.Router()

const {
    getAllTowers,
    createTower,
    getTower,
    updateTower,
    deleteTower
} = require('../controllers/towers.js')

router.route('/').get(getAllTowers)
    .post(createTower)

router.route('/:id').get(getTower)
    .patch(updateTower)
    .delete(deleteTower)

module.exports = router
