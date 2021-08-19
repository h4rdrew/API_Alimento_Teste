import { AlimentoCadastroComponent } from './alimentos/cadastro/alimento-cadastro/alimento-cadastro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'alimento-cadastro', component:AlimentoCadastroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
