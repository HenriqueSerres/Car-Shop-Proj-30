import { ICar } from '../../interfaces/ICar';

const carMock:ICar = {
  model: "Fiat Uno",
  year: 1963,
  color: "blue",
  buyValue: 3500,
  seatsQty: 4,
  doorsQty: 4
};

const carMockWithId:ICar & { _id:string } = {
  _id: "4edd40c86762e0fb12000003",
  model: "Fiat Uno",
  year: 1963,
  color: "blue",
  buyValue: 3500,
  seatsQty: 4,
  doorsQty: 4
};

const carMockUpDate:ICar = {
  model: "Fiat Uno Mile",
  year: 1968,
  color: "blue",
  buyValue: 4000,
  seatsQty: 4,
  doorsQty: 4
};

const carMockWithIdUpDate:ICar & { _id:string } = {
  _id: "4edd40c86762e0fb12000003",
  model: "Fiat Uno Mile",
  year: 1968,
  color: "blue",
  buyValue: 4000,
  seatsQty: 4,
  doorsQty: 4
};

export {
  carMock,
  carMockWithId,
  carMockUpDate,
  carMockWithIdUpDate
};