import { expect } from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog';
import CarModel from '../../../models/Cars';
import CarService from '../../../services/Cars';
import { carMock, carMockWithId, carMockUpDate, carMockWithIdUpDate } from '../../unit/mocks/carMock';

describe('Car Service', () => {
	const carModel = new CarModel();
	const carService = new CarService(carModel);

	before(() => {
		sinon.stub(carModel, 'create').resolves(carMockWithId);
    sinon.stub(carModel, 'update')
      .onCall(0).resolves(carMockWithIdUpDate)
			.onCall(1).resolves(null);
		sinon.stub(carModel, 'readOne')
			.onCall(0).resolves(carMockWithId)
			.onCall(1).resolves(null)
      .onCall(2).resolves(carMockWithId)
			.onCall(3).resolves(null)
      .onCall(4).resolves(carMockWithId)
			.onCall(5).resolves(null);
      
    sinon.stub(carModel, 'delete')
			.resolves(carMockWithId)
	})
	after(() => {
		sinon.restore()
	})
	describe('Create Car', () => {
		it('Success', async () => {
			const carCreated = await carService.create(carMock);

			expect(carCreated).to.be.deep.equal(carMockWithId);
		});

		it('Failure', async () => {
			try {
				await carService.create({} as any);
			} catch (error) {
				expect(error).to.be.instanceOf(ZodError);
			}
		});
	});

	describe('ReadOne Car', () => {
		it('Success', async () => {
			const carCreated = await carService.readOne(carMockWithId._id);

			expect(carCreated).to.be.deep.equal(carMockWithId);
		});

		it('Failure', async () => {
			try {
				await carService.readOne(carMockWithId._id);
			} catch (error:any) {
				expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
			}
		});
	});

  describe('Update Car', () => {
		it('Success', async () => {
			const carUpdated = await carService.update(carMockWithIdUpDate._id, carMockUpDate);

			expect(carUpdated).to.be.deep.equal(carMockWithIdUpDate);
		});

		it('Failure', async () => {
			try {
				await carService.update(carMockWithId._id, carMockUpDate);
			} catch (error:any) {
				expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
			}
		});
	});

  describe('Erase a Car', () => {
		it('Success', async () => {
			const carErased = await carService.delete(carMockWithId._id);

			expect(carErased).to.be.deep.equal(carMockWithId);
		});

		it('Failure', async () => {
			try {
				await carService.delete(carMockWithId._id);
			} catch (error:any) {
				expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
			}
		});
	});
});