import { ProdutoLista } from "./ProdutoLista.model";

export class Lista {
  public id: number;
  public nome: string;
  public produtos: ProdutoLista[];

  constructor(id: number, nome: string, produtos: ProdutoLista[]) {
    this.id = id;
    this.nome = nome;
    this.produtos = produtos;
  }
}