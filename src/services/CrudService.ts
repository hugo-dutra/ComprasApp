import { IBasicCrudService } from "../interfaces/IBasicCrudService";

export default class CrudService<T> {
  public basicCrudService: IBasicCrudService<T>;
  constructor(basicCrudService: IBasicCrudService<T>, baseCollection: string) {
    this.basicCrudService = basicCrudService;
    this.basicCrudService.baseCollection = baseCollection
  }

  public getInstance(): IBasicCrudService<T> {
    return this.basicCrudService;
  }


}