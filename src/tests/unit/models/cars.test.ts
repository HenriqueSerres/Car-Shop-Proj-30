import { expect } from 'chai';
import sinon from 'sinon';
import CarModel from '../../../models/Cars';
import { Model } from 'mongoose';
import {
  carMock,
  carMockWithId,
  carMockUpDate,
  carMockWithIdUpDate
} from '../../mocks/carMock';

describe('car Model', () => {
  const carModel = new CarModel();

	before(() => {
		sinon.stub(Model, 'create').resolves(carMockWithId);
		sinon.stub(Model, 'findOne').resolves(carMockWithId);
    sinon.stub(Model, 'findByIdAndUpdate').resolves(carMockWithIdUpDate);
	});

	after(() => {
		sinon.restore();
	});

  describe('creating a Car', () => {
		it('successfully created', async () => {
			const newCar = await carModel.create(carMock);
			expect(newCar).to.be.deep.equal(carMockWithId);
		});
	});

	describe('searching a Car', () => {
		it('successfully found', async () => {
			const carsFound = await carModel.readOne('62cf1fc6498565d94eba52cd');
			expect(carsFound).to.be.deep.equal(carMockWithId);
		});

		it('_id not found', async () => {
			try {
				await carModel.readOne('123ERRADO');
			} catch (error: any) {
				expect(error.message).to.be.eq('InvalidMongoId');
			}
		});
	});

  describe('updating a Car', () => {
		it('successfully updated', async () => {
			const carUpDated = await carModel.update('62cf1fc6498565d94eba52cd', carMockUpDate);
			expect(carUpDated).to.be.deep.equal(carMockWithIdUpDate);
		});

		it('_id not found', async () => {
			try {
				await carModel.update('123ERRADO', carMockUpDate);
			} catch (error: any) {
				expect(error.message).to.be.eq('InvalidMongoId');
			}
		});
	});

});