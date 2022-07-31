import IService from '../interfaces/IService';
import { motoZodSchema, IMotorcycle } from '../interfaces/IMotorcycle';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../errors/catalog';

class MotoService implements IService<IMotorcycle> {
  private _moto:IModel<IMotorcycle>;
  constructor(model:IModel<IMotorcycle>) {
    this._moto = model;
  }

  public async create(obj:IMotorcycle):Promise<IMotorcycle> {
    const parsed = motoZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error; 
    }
    return this._moto.create(obj);
  }

  public async readOne(_id:string):Promise<IMotorcycle> {
    const moto = await this._moto.readOne(_id);
    if (!moto) throw new Error(ErrorTypes.EntityNotFound);
    return moto;
  }

  public async update(_id:string, obj:IMotorcycle):Promise<IMotorcycle | null> {
    const parsed = motoZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error; 
    }
    await this.readOne(_id);
    const result = await this._moto.update(_id, obj);
    return result;
  }

  public async read():Promise<IMotorcycle[]> {
    const moto = await this._moto.read();
    if (!moto) throw new Error(ErrorTypes.EntityNotFound);
    return moto;
  }

  public async delete(_id:string):Promise<IMotorcycle | null> {
    const moto = await this._moto.readOne(_id);
    
    if (!moto) throw new Error(ErrorTypes.EntityNotFound);
    return this._moto.delete(_id);
  }
}

export default MotoService;