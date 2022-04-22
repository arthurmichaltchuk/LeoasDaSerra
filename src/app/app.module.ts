import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { HeaderComponent } from './navegacao/header/header.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlunaCriarComponent } from './features/aluna/criar/aluna-criar.component';
import { AlunaEditarComponent } from './features/aluna/editar/aluna-editar.component';
import { AlunaListarComponent } from './features/aluna/listar/aluna-listar.component';
import { HttpAlunaService } from './features/aluna/services/http-aluna.service';
import { ChamadaCriarComponent } from './features/chamada/criar/chamada-criar.component';
import { ChamadaEditarComponent } from './features/chamada/editar/chamada-editar.component';
import { ChamadaListarComponent } from './features/chamada/listar/chamada-listar.component';
import { ChamadaServicesComponent } from './features/chamada/services/chamada-services.component';
import { ChamadaViewModelsComponent } from './features/chamada/viewModels/chamada-view-models.component';
import { ConfigCriarComponent } from './features/config/criar/config-criar.component';
import { ConfigEditarComponent } from './features/config/editar/config-editar.component';
import { ConfigListarComponent } from './features/config/listar/config-listar.component';
import { ConfigServicesComponent } from './features/config/services/config-services.component';
import { ConfigViewModelsComponent } from './features/config/viewModels/config-view-models.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    HomeComponent,
    AlunaCriarComponent,
    AlunaEditarComponent,
    AlunaListarComponent,
    ChamadaCriarComponent,
    ChamadaEditarComponent,
    ChamadaListarComponent,
    ChamadaServicesComponent,
    ChamadaViewModelsComponent,
    ConfigCriarComponent,
    ConfigEditarComponent,
    ConfigListarComponent,
    ConfigServicesComponent,
    ConfigViewModelsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    { provide: 'IHttpAlunaServiceToken', useClass: HttpAlunaService },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
