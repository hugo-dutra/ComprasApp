import { IBasicCrudService } from "../interfaces/IBasicCrudService";

export default class CrudService<T> {
  public crudService: IBasicCrudService<T>;
  constructor(basicCrudService: IBasicCrudService<T>, baseCollection: string) {
    this.crudService = basicCrudService;
    this.crudService.baseCollection = baseCollection
  }


}