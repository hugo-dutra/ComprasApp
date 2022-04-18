export interface IBasicCrudService<T> {
  baseCollection: string;
  create(Object: T): Promise<T>;
  listAll(): Promise<T>[];
  update(id: number): Promise<T>;
  delete(id: number): Promise<void>;
}