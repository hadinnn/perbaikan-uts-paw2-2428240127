const mongoose = require('mongoose');

const lokasiSchema = new mongoose.Schema({
  kelurahan: String,
  kecamatan: String,
}, { _id: false });

const laporanSchema = new mongoose.Schema({
  noLaporan: { type: String, required: [true, 'Nomor laporan wajib diisi'], unique: true, trim: true },
  judul: { type: String, required: [true, 'Judul laporan wajib diisi'], trim: true },
  tingkatUrgensi: { type: Number, min: 1},
  status: { type: String, trim: true },
  lokasi: lokasiSchema,
  dinasId: { type: mongoose.Schema.Types.ObjectId, ref: 'Dinas' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Laporan', laporanSchema);