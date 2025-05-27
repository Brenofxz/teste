import { Component } from '@angular/core';
import { ProdutoService } from '../../core/services/produto.service';
import { Produto } from '../../core/services/types/types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produto-listagem',
  templateUrl: './admin-insere.component.html',
  standalone: true,
  imports:[ ],
  styleUrls: ['./admin-insere.component.css']
})

export class AdminInsereComponent {


  produtos: Produto[] = []
  constructor(private produtoService: ProdutoService) { }

  produtoAtual: Produto = { id: 0, nome: '', preco: 0, imagem: '' };
  editando = false;
  indexEditando = -1;
  mostrarFormulario = false;

  ngOnInit() {
    this.produtoService.listar().subscribe((produto) => {
      this.produtos = produto;
    })
  }

  novoProduto() {
    this.produtoAtual = { id: 0, nome: '', preco: 0, imagem: '' };
    this.editando = false;
    this.mostrarFormulario = true;
  }

  salvarProduto() {
    if (this.editando) {
      this.produtos[this.indexEditando] = { ...this.produtoAtual };
    } else {
      this.produtos.push({ ...this.produtoAtual });
    }
    this.cancelar();
  }

  editar(index: number) {
    this.produtoAtual = { ...this.produtos[index] };
    this.indexEditando = index;
    this.editando = true;
    this.mostrarFormulario = true;
  }

  excluir(index: number) {
    this.produtoService.deletar(index).subscribe(() => {
      this.produtoService.listar().subscribe((produto) => {
        this.produtos = produto;
      })
    })



  }

  cancelar() {
    this.produtoAtual = { id: 0, nome: '', preco: 0, imagem: '' };
    this.editando = false;
    this.indexEditando = -1;
    this.mostrarFormulario = false;
  }
}