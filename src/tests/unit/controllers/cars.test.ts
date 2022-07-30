import { expect } from 'chai';
import * as sinon from 'sinon';
import { NextFunction, Request, Response } from 'express';
import { carMock, carMockWithId, allCarMock, carMockWithIdUpDate, carMockUpDate } from '../../unit/mocks/carMock';
import CarController from '../../../controllers/Cars';
import CarService from '../../../services/Cars';
import CarModel from '../../../models/Cars';


describe('Car Controller', () => {
  const carModel = new CarModel()
  const carService = new CarService(carModel);
  const carController = new CarController(carService);
  
  const req = {} as Request; 
 
  const res = {} as Response;

  before(() => {
    sinon.stub(carService, 'create').resolves(carMock);
    sinon.stub(carService, 'readOne').resolves(carMockWithId);
    sinon.stub(carService, 'read').resolves(allCarMock);
    sinon.stub(carService, 'update').resolves(carMockWithIdUpDate);
    sinon.stub(carService, 'delete').resolves(carMockWithId);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(() => {
    sinon.restore()
  })

  describe('Create Car', () => {
    it('Success', async () => {
      req.body = carMock;
      await carController.create(req, res);
      
      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMock)).to.be.true;
    });
  });

  describe('Read all Cars', () => {
    it('Success', async () => {
      await carController.read(req, res);
      
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(allCarMock)).to.be.true;
    });
  });

  describe('ReadOne car', () => {
    it('Success', async () => {
      
      req.params = { id: carMockWithId._id };
      await carController.readOne(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMockWithId)).to.be.true;
    });
  });

  describe('Update a Car', () => {
    it('Success', async () => {
      req.params = { id: carMockWithId._id };
      req.body = carMockUpDate;
      await carController.update(req, res);
      
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMockWithIdUpDate)).to.be.true;
    });
  });

  describe('Erase a Car', () => {
    it('Success', async () => {
      req.params = { id: carMockWithId._id };
      await carController.delete(req, res);
      
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMockWithId)).to.be.true;
    });
  });
});