import { model as mongooseCreateModel, Schema } from 'mongoose';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import MongoModel from './MongoModel';

const motoMongooseSchema = new Schema<IMotorcycle>({
  status: Boolean,
  model: String,
  year: Number,
  color: String,
  buyValue: Number,
  category: String,
  engineCapacity: Number,
}, { versionKey: false });
// https://pt.stackoverflow.com/questions/174511/campo-v-em-todos-os-documentos-de-uma-cole%C3%A7%C3%A3o
class Motorcycle extends MongoModel<IMotorcycle> {
  constructor(model = mongooseCreateModel('Moto', motoMongooseSchema)) {
    super(model);
  }
}

export default Motorcycle;