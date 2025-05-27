import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompraFinalizadaComponent } from '../compra-finalizada/compra-finalizada.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


describe('CompraFinalizadaComponent', () => {

  let component: CompraFinalizadaComponent;
  let fixture: ComponentFixture<CompraFinalizadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompraFinalizadaComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CompraFinalizadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
;

const routes: Routes = [
  { path: 'compra-finalizada', component: CompraFinalizadaComponent },
  { path: '**', redirectTo: 'compra-finalizada' } // rota padrão de teste
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }