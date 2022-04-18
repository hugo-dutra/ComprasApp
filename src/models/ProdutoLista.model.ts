import { Produto } from "./Produto.model";

export class ProdutoLista {
  public id: number;
  public produto: Produto;
  public quantidadeDoProduto: number;
  public selecionado: boolean;

  constructor(id: number, produto: Produto, quantidade: number, selecionado: boolean) {
    this.id = id;
    this.produto = produto;
    this.quantidadeDoProduto = quantidade;
    this.selecionado = selecionado;
  }
}