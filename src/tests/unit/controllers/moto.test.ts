import { expect } from 'chai';
import * as sinon from 'sinon';
import { NextFunction, Request, Response } from 'express';
import { motoMock, motoMockWithId, allMotoMock, motoMockWithIdUpDate, motoMockUpDate } from '../../unit/mocks/motoMock';
import MotoController from '../../../controllers/Moto';
import MotoService from '../../../services/Moto';
import MotoModel from '../../../models/Moto';


describe('Moto Controller', () => {
  const motoModel = new MotoModel()
  const motoService = new MotoService(motoModel);
  const motoController = new MotoController(motoService);
  
  const req = {} as Request; 
 
  const res = {} as Response;

  before(() => {
    sinon.stub(motoService, 'create').resolves(motoMock);
    sinon.stub(motoService, 'readOne').resolves(motoMockWithId);
    sinon.stub(motoService, 'read').resolves(allMotoMock);
    sinon.stub(motoService, 'update').resolves(motoMockWithIdUpDate);
    sinon.stub(motoService, 'delete').resolves(motoMockWithId);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(() => {
    sinon.restore()
  })

  describe('Create moto', () => {
    it('Success', async () => {
      req.body = motoMock;
      await motoController.create(req, res);
      
      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(motoMock)).to.be.true;
    });
  });

  describe('Read all motos', () => {
    it('Success', async () => {
      await motoController.read(req, res);
      
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(allMotoMock)).to.be.true;
    });
  });

  describe('ReadOne moto', () => {
    it('Success', async () => {
      
      req.params = { id: motoMockWithId._id };
      await motoController.readOne(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(motoMockWithId)).to.be.true;
    });
  });

  describe('Update a moto', () => {
    it('Success', async () => {
      req.params = { id: motoMockWithId._id };
      req.body = motoMockUpDate;
      await motoController.update(req, res);
      
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(motoMockWithIdUpDate)).to.be.true;
    });
  });

  describe('Erase a moto', () => {
    it('Success', async () => {
      req.params = { id: motoMockWithId._id };
      await motoController.delete(req, res);
      
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(motoMockWithId)).to.be.true;
    });
  });
});