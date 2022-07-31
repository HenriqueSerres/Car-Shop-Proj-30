import { expect } from 'chai';
import sinon from 'sinon';
import MotoModel from '../../../models/Moto';
import { Model } from 'mongoose';
import {
  allMotoMock,
  motoMock,
  motoMockWithId,
  motoMockUpDate,
  motoMockWithIdUpDate
} from '../../unit/mocks/motoMock';

describe('moto Model', () => {
  const motoModel = new MotoModel();

	before(() => {
    sinon.stub(Model, 'find').resolves(allMotoMock);
		sinon.stub(Model, 'create').resolves(motoMockWithId);
		sinon.stub(Model, 'findOne').resolves(motoMockWithId);
    sinon.stub(Model, 'findByIdAndUpdate').resolves(motoMockWithIdUpDate);
    sinon.stub(Model, 'findByIdAndRemove').resolves(motoMockWithId);
	});

	after(() => {
		sinon.restore();
	});

  describe('creating a moto', () => {
		it('successfully created', async () => {
			const newMoto = await motoModel.create(motoMock);
			expect(newMoto).to.be.deep.equal(motoMockWithId);
		});
	});

  describe('seraching all motos', () => {
		it('successfully search', async () => {
			const allMotos = await motoModel.read();
			expect(allMotos).to.be.deep.equal(allMotoMock);
		});
	});

	describe('searching a moto', () => {
		it('successfully found', async () => {
			const motosFound = await motoModel.readOne('62cf1fc6498565d94eba52cd');
			expect(motosFound).to.be.deep.equal(motoMockWithId);
		});

		it('_id not found', async () => {
			try {
				await motoModel.readOne('123ERRADO');
			} catch (error: any) {
				expect(error.message).to.be.eq('InvalidMongoId');
			}
		});
	});

  describe('updating a moto', () => {
		it('successfully updated', async () => {
			const motoUpDated = await motoModel.update('62cf1fc6498565d94eba52cd', motoMockUpDate);
			expect(motoUpDated).to.be.deep.equal(motoMockWithIdUpDate);
		});

		it('_id not found', async () => {
			try {
				await motoModel.update('123ERRADO', motoMockUpDate);
			} catch (error: any) {
				expect(error.message).to.be.eq('InvalidMongoId');
			}
		});
	});

  describe('erasing a moto', () => {
		it('successfully erased', async () => {
			const moto = await motoModel.delete('62cf1fc6498565d94eba52cd');
			expect(moto).to.be.deep.equal(motoMockWithId);
		});
	});

});