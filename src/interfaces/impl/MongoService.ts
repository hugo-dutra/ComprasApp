import { IBasicCrudService } from "../IBasicCrudService";

export class MongoService<T> implements IBasicCrudService<T>{
  baseCollection: string;
  constructor(baseCollection: string) {
    this.baseCollection = baseCollection;
  }
  create(Object: T): Promise<T> {
    alert("Mongo create implementation");
    throw new Error("Method not implemented.");
  }
  listAll(): Promise<T[]> {
    alert("Mongo  listAllimplementation");
    throw new Error("Method not implemented.");
  }
  update(id: number): Promise<T> {
    alert("Mongo update implementation");
    throw new Error("Method not implemented.");
  }
  delete(id: number): Promise<void> {
    alert("Mongo delete implementation");
    throw new Error("Method not implemented.");
  }

}