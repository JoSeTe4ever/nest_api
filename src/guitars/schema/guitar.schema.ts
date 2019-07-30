import * as mongoose from 'mongoose';

export const GuitarSchema = new mongoose.Schema({
  id: String,
  brand: String,
  name: String,
  year: Number,
});
