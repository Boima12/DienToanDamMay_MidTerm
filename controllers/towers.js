const { NotFoundError } = require('../errors')
const { StatusCodes } = require('http-status-codes')

const Tower = require('../models/Tower.js');

const getAllTowers = async (req, res) => {
  const towers = await Tower.find({});
  res.status(StatusCodes.OK).json({ towers });
}

const createTower = async (req, res) => {
  const { name, description, placement_cost } = req.body;
  const tower = await Tower.create({ name, description, placement_cost });
  res.status(StatusCodes.CREATED).json({ tower });
}

const getTower = async (req, res, next) => {
  const { id: towerId } = req.params;

  const tower = await Tower.findOne({ _id: towerId });
  if (!tower) {
    throw new NotFoundError(`Tower'id ${towerId} not found`)
  }

  res.status(StatusCodes.OK).json({ tower });
}

const updateTower = async (req, res, next) => {
  const { id: towerId } = req.params;
  const updates = req.body;

  const tower = await Tower.findOneAndUpdate({ _id: towerId }, updates, {
    new: true,
    runValidators: true,
  })

  if (!tower) {
    throw new NotFoundError(`Tower ${towerId} not found`)
  }

  res.status(StatusCodes.OK).json({ tower });
}

const deleteTower = async (req, res, next) => {
  const { id: towerId } = req.params;
  const tower = await Tower.findOneAndDelete({ _id: towerId })

  if (!tower) {
    throw new NotFoundError(`Tower ${towerId} not found`)
  }

  res.status(StatusCodes.OK).json({ message: `Tower ${towerId} deleted successfully` });
}

module.exports = {
  getAllTowers,
  createTower,
  getTower,
  updateTower,
  deleteTower
}
