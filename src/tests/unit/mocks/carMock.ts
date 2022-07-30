import { ICar } from '../../../interfaces/ICar';

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

const allCarMock:ICar[] & { _id:string }[] = [
  {
    _id: "4edd40c86762e0fb12000003",
    model: "Fiat Uno Mile",
    year: 1968,
    color: "blue",
    buyValue: 4000,
    seatsQty: 4,
    doorsQty: 4
  },
  {
    _id: "4edd40c86762e0fb12000003",
    model: "Gol Bolinha",
    year: 1980,
    color: "white",
    buyValue: 8000,
    seatsQty: 4,
    doorsQty: 2
  }
];

export {
  allCarMock,
  carMock,
  carMockWithId,
  carMockUpDate,
  carMockWithIdUpDate
};