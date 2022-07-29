import { Router } from 'express';
import CarController from '../controllers/Cars';
import CarModel from '../models/Cars';
import CarService from '../services/Cars';

const route = Router();

const car = new CarModel();
const carService = new CarService(car);
const carController = new CarController(carService);

route.get('/cars', (req, res) => carController.read(req, res));
route.post('/cars', (req, res) => carController.create(req, res));
route.get('/cars/:id', (req, res) => carController.readOne(req, res));
route.put('/cars/:id', (req, res) => carController.update(req, res));
route.delete('/cars/:id', (req, res) => carController.delete(req, res));

export default route;