const express = require('express');
const router = express.Router();
const laporanController = require('../controllers/laporanController');
const cekApiKey = require('../middlewares/cekApiKey');

router.get('/', laporanController.getAll);
router.get('/:id', laporanController.getById);
router.post('/', cekApiKey, laporanController.create);
router.put('/:id', cekApiKey, laporanController.update);
router.delete('/:id', cekApiKey, laporanController.remove);

module.exports = router;