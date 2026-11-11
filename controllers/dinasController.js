const Dinas = require('../models/dinasModel');

exports.create = async (req, res) => {
  try {
    const dinas = await Dinas.create(req.body);
    res.status(201).json(dinas);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAll = async (req, res) => {
  res.json(await Dinas.find());
};