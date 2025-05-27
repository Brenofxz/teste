import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compra-finalizada',
  templateUrl: './compra-finalizada.component.html',
  styleUrls: ['./compra-finalizada.component.css']
})
export class CompraFinalizadaComponent {

  constructor(private router: Router) { }

  voltar() {
    this.router.navigate(['/']); // ou para onde for sua loja

  }

  finalizarCompra() {
    this.router.navigate(['/']);
  }
}