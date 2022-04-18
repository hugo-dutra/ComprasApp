import { IBasicCrudService } from "../IBasicCrudService";

export class FirebaseService<T> implements IBasicCrudService<T> {
  baseCollection: string;
  constructor(baseCollection: string) {
    this.baseCollection = baseCollection;
  }
  create(Object: T): Promise<T> {
    alert("Firebase create implementation");
    throw new Error("Method not implemented.");
  }
  listAll(): Promise<T>[] {
    alert("Firebase  listAllimplementation");
    throw new Error("Method not implemented.");
  }
  update(id: number): Promise<T> {
    alert("Firebase update implementation");
    throw new Error("Method not implemented.");
  }
  delete(id: number): Promise<void> {
    alert("Firebase delete implementation");
    throw new Error("Method not implemented.");
  }

}