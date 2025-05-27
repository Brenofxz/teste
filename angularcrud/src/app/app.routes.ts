import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { CalcadosMasculinoComponent } from './pages/calcados-masculino/calcados-masculino.component';

import { ProdutoFormComponent } from './pages/produto-form/produto-form.component';
import { CompraFinalizadaComponent } from './compra-finalizada/compra-finalizada.component';
import { LoginAdminComponent } from './pages/login-admin/login-admin.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminInsereComponent } from './pages/admin-insere/admin-insere.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home',
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Login',
    },
    {
        path: 'carrinho',
        component: CarrinhoComponent,
        title: 'carrinho',
    },
    {
        path: 'Calcados',
        component: CalcadosMasculinoComponent,
        title: 'Calcados',
    },
    {
        path: 'admin',
        component: AdminInsereComponent,
        title: 'admin',
    },
    {
        path: 'produtos',
        component: ProdutoFormComponent,
        title: 'Produtos',
    },

    {
        path: 'compra-finalizada',
        component: CompraFinalizadaComponent,
        title: 'Compra Finalizada',
    },

    {
        path: 'login-admin',
        component: LoginAdminComponent,
        title: 'Acesso ao admin',
    },




];
