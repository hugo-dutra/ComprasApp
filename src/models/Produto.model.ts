import { UnidadeDeMedida } from "./UnidadeDeMedida.model";

export class Produto {
  public id: number;
  public nome: string;
  public marca: string;
  public quantidadeDoProduto: number;
  public unidade: UnidadeDeMedida;

  constructor(id: number, nome: string, marca: string, quantidadeDoProduto: number, unidadeDeMedida: UnidadeDeMedida) {
    this.id = id;
    this.nome = nome;
    this.marca = marca;
    this.quantidadeDoProduto = quantidadeDoProduto;
    this.unidade = unidadeDeMedida;
  }
}