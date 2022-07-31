import { Router } from 'express';
import MotoController from '../controllers/Moto';
import MotoModel from '../models/Moto';
import MotoService from '../services/Moto';

const route = Router();

const moto = new MotoModel();
const motoService = new MotoService(moto);
const motoController = new MotoController(motoService);

const motoWithId = '/motorcycles/:id';

route.get('/motorcycles', (req, res) => motoController.read(req, res));
route.post('/motorcycles', (req, res) => motoController.create(req, res));
route.get(motoWithId, (req, res) => motoController.readOne(req, res));
route.put(motoWithId, (req, res) => motoController.update(req, res));
route.delete(motoWithId, (req, res) => motoController.delete(req, res));

export default route;