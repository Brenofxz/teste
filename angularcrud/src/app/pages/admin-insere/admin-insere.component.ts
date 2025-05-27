import { Component } from '@angular/core';

interface Produto {
  nome: string;
  preco: number;
  quantidade: number;
}

@Component({
  selector: 'app-produto-listagem',
  templateUrl: './produto-listagem.component.html',
  styleUrls: ['./produto-listagem.component.css']
})
export class ProdutoListagemComponent {
  produtos: Produto[] = [
    { nome: 'Teclado Gamer', preco: 199.99, quantidade: 10 },
    { nome: 'Mouse Sem Fio', preco: 89.50, quantidade: 25 }
  ];

  produtoAtual: Produto = { nome: '', preco: 0, quantidade: 0 };
  editando = false;
  indexEditando = -1;
  mostrarFormulario = false;

  novoProduto() {
    this.produtoAtual = { nome: '', preco: 0, quantidade: 0 };
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
    this.produtos.splice(index, 1);
    if (this.editando && this.indexEditando === index) {
      this.cancelar();
    }
  }

  cancelar() {
    this.produtoAtual = { nome: '', preco: 0, quantidade: 0 };
    this.editando = false;
    this.indexEditando = -1;
    this.mostrarFormulario = false;
  }
}