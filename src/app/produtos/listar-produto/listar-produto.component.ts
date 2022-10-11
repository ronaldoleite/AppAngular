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


  public produtos: Produto[] = [];
  ngOnInit() {
    this.produtoService.obterProduto()
    .subscribe(
      produtos =>{
        this.produtos = produtos;
        console.log(produtos);
      },
      error => console.log(error)
    );
  }

}
