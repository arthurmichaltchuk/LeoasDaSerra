import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChamadaCriarComponent } from './features/chamada/criar/chamada-criar.component';
import { ChamadaEditarComponent } from './features/chamada/editar/chamada-editar.component';
import { ChamadaListarComponent } from './features/chamada/listar/chamada-listar.component';
import { ConfigCriarComponent } from './features/config/criar/config-criar.component';
import { ConfigEditarComponent } from './features/config/editar/config-editar.component';
import { ConfigListarComponent } from './features/config/listar/config-listar.component';
import { AlunaCriarComponent } from './features/aluna/criar/aluna-criar.component';
import { AlunaEditarComponent } from './features/aluna/editar/aluna-editar.component';
import { AlunaListarComponent } from './features/aluna/listar/aluna-listar.component';
import { HomeComponent } from './home/home.component';
import { SuporteComponent } from './features/suporte/suporte.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'aluna/listar', component: AlunaListarComponent },
  { path: 'aluna/criar', component: AlunaCriarComponent },
  { path: 'aluna/editar/:id', component: AlunaEditarComponent },
  { path: 'chamada/listar', component: ChamadaListarComponent },
  { path: 'chamada/criar', component: ChamadaCriarComponent },
  { path: 'chamada/editar/:id', component: ChamadaEditarComponent },
  { path: 'config/listar', component: ConfigListarComponent },
  { path: 'config/criar', component: ConfigCriarComponent },
  { path: 'config/editar/:id', component: ConfigEditarComponent },
  { path: 'suporte', component: SuporteComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
