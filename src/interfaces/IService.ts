interface IService<T> {
  read():Promise<T[]>,
  create(obj:T):Promise<T>,
  readOne(_id:string):Promise<T>,
  delete(_id:string):Promise<T | null>,
  update(_id:string, obj:T):Promise<T | null>,
}

export default IService;