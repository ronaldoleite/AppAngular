import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produtos.service';

@Component({
  selector: 'app-listar-produto',
  templateUrl:'./lista-produto.component.html',
  styles: []
})
export class ListarProdutoComponent implements OnInit {

// injeção de dependencia
  constructor(private produtoService: ProdutoService) { }

// cria uma lista de produtos
  public produtos: Produto[] = [];
  ngOnInit() {
    this.produtoService.obterProduto()// obterProduto esta definido em produtoService
    .subscribe(
      produtos =>{
        this.produtos = produtos;
        console.log(produtos);
      },
      error => console.log(error)
    );
  }

}
