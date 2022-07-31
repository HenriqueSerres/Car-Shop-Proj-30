import { IMotorcycle } from '../../../interfaces/IMotorcycle';

const motoMock:IMotorcycle = {
  model: "Honda CG Titan 125",
  year: 1963,
  color: "blue",
  buyValue: 3500,
  category: 'Street',
  engineCapacity: 4
};

const motoMockWithId:IMotorcycle & { _id:string } = {
  _id: "4edd40c86762e0fb12000003",
  model: "Honda CG Titan 125",
  year: 1963,
  color: "blue",
  buyValue: 3500,
  category: 'Street',
  engineCapacity: 4
};

const motoMockUpDate:IMotorcycle = {
  model: "Honda CG Titan 125 Mile",
  year: 2000,
  color: "black",
  buyValue: 4000,
  category: 'Street',
  engineCapacity: 4
};

const motoMockWithIdUpDate:IMotorcycle & { _id:string } = {
  _id: "4edd40c86762e0fb12000003",
  model: "Honda CG Titan 125 Mile",
  year: 2000,
  color: "black",
  buyValue: 4000,
  category: 'Street',
  engineCapacity: 4
};

const allMotoMock:IMotorcycle[] & { _id:string }[] = [
  {
    _id: "4edd40c86762e0fb12000003",
    model: "Honda CG Titan 125 Mile",
    year: 1968,
    color: "blue",
    buyValue: 4000,
    category: 'Street',
    engineCapacity: 4
  },
  {
    _id: "4edd40c86762e0fb12000003",
    model: "Kawasaki",
    year: 2022,
    color: "white",
    buyValue: 800000,
    category: 'Street',
    engineCapacity: 2
  }
];

export {
  allMotoMock,
  motoMock,
  motoMockWithId,
  motoMockUpDate,
  motoMockWithIdUpDate
};