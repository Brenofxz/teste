import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { MenuComponent } from "../../components/menu/menu.component";
import { Router, RouterLink } from '@angular/router';
import { ProdutoService } from '../../core/services/produto.service';
import { CommonModule } from '@angular/common';
import type { Produto } from '../../core/services/types/types';
import { CarrinhoService } from '../../core/services/carrinho.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, MenuComponent, RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  titulo: string = "Bem-vindos!";
  idUser: number | null = localStorage.getItem('id_user') ? parseInt(localStorage.getItem('id_user')!) : null;

  numeroDeItensNoCarrinho: number = 0;


  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService, private carrinhoService: CarrinhoService, private route: Router) { }

  onAtualizarNumeroDeItensNoCarrinho(): void {
    if (this.idUser != null)
      this.carrinhoService.buscarCarrinhoPeloIdDoUsuario(this.idUser).subscribe((carrinho: any[]) => {
        this.numeroDeItensNoCarrinho = carrinho.length;
      });
  }

  ngOnInit(): void {
    this.produtoService.listar().subscribe((produtos: Produto[]) => {
      this.produtos = produtos;
    });

    this.onAtualizarNumeroDeItensNoCarrinho();

  }

  adicionarAoCarrinho(produto: Produto): void {
    if (this.idUser == null) {
      this.route.navigate(['/login'])
      return;
    }

    if (this.idUser)
      this.carrinhoService.adicionarProdutoAoCarrinho(this.idUser, produto.id).subscribe(() => {
        alert(`Produto ${produto.nome} adicionado ao carrinho!`)
        this.onAtualizarNumeroDeItensNoCarrinho();
      });

  }



}
