import { IBasicCrudService } from "../IBasicCrudService";

export class JsonService<T> implements IBasicCrudService<T>{
  public baseCollection: string;
  constructor(baseCollection: string) {
    this.baseCollection = baseCollection
  }
  create(Object: T): Promise<T> {
    alert("Json create implementation");
    throw new Error("Method not implemented.");
  }
  listAll(): Promise<T>[] {
    alert("Json  listAllimplementation");
    throw new Error("Method not implemented.");
  }
  update(id: number): Promise<T> {
    alert("Json update implementation");
    throw new Error("Method not implemented.");
  }
  delete(id: number): Promise<void> {
    alert("Json delete implementation");
    throw new Error("Method not implemented.");
  }
}