import { expect } from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog';
import MotoModel from '../../../models/Moto';
import MotoService from '../../../services/Moto';
import { motoMock, motoMockWithId, motoMockUpDate, motoMockWithIdUpDate, allMotoMock } from '../../unit/mocks/motoMock';

describe('moto Service', () => {
	const motoModel = new MotoModel();
	const motoService = new MotoService(motoModel);

	before(() => {
		sinon.stub(motoModel, 'create').resolves(motoMockWithId);
    sinon.stub(motoModel, 'read').resolves(allMotoMock);
    sinon.stub(motoModel, 'update')
      .onCall(0).resolves(motoMockWithIdUpDate)
			.onCall(1).resolves(null);
		sinon.stub(motoModel, 'readOne')
			.onCall(0).resolves(motoMockWithId)
			.onCall(1).resolves(null)
      .onCall(2).resolves(motoMockWithId)
			.onCall(3).resolves(null)
      .onCall(4).resolves(motoMockWithId)
			.onCall(5).resolves(null);
      
    sinon.stub(motoModel, 'delete')
			.resolves(motoMockWithId)
	})
	after(() => {
		sinon.restore()
	})
	describe('Create Moto', () => {
		it('Success', async () => {
			const motoCreated = await motoService.create(motoMock);

			expect(motoCreated).to.be.deep.equal(motoMockWithId);
		});

		it('Failure', async () => {
			try {
				await motoService.create({} as any);
			} catch (error) {
				expect(error).to.be.instanceOf(ZodError);
			}
		});
	});

  describe('Read all Motos', () => {
		it('Success', async () => {
			const allMotos = await motoService.read();

			expect(allMotos).to.be.deep.equal(allMotoMock);
		});

		it('Failure', async () => {
			try {
				await motoService.create({} as any);
			} catch (error) {
				expect(error).to.be.instanceOf(ZodError);
			}
		});
	});

	describe('ReadOne Moto', () => {
		it('Success', async () => {
			const motoCreated = await motoService.readOne(motoMockWithId._id);

			expect(motoCreated).to.be.deep.equal(motoMockWithId);
		});

		it('Failure', async () => {
			try {
				await motoService.readOne(motoMockWithId._id);
			} catch (error:any) {
				expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
			}
		});
	});

  describe('Update Moto', () => {
		it('Success', async () => {
			const motoUpdated = await motoService.update(motoMockWithIdUpDate._id, motoMockUpDate);

			expect(motoUpdated).to.be.deep.equal(motoMockWithIdUpDate);
		});

		it('Failure', async () => {
			try {
				await motoService.update(motoMockWithId._id, motoMockUpDate);
			} catch (error:any) {
				expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
			}
		});
	});

  describe('Erase a Moto', () => {
		it('Success', async () => {
			const motoErased = await motoService.delete(motoMockWithId._id);

			expect(motoErased).to.be.deep.equal(motoMockWithId);
		});

		it('Failure', async () => {
			try {
				await motoService.delete(motoMockWithId._id);
			} catch (error:any) {
				expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
			}
		});
	});
});