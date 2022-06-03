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
import { ConfigCriarComponent } from './features/config/criar/config-criar.component';
import { ConfigEditarComponent } from './features/config/editar/config-editar.component';
import { ConfigListarComponent } from './features/config/listar/config-listar.component';
import { HttpChamadaService } from './features/chamada/services/http-chamada.service';
import { SuporteComponent } from './features/suporte/suporte.component';

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
    ConfigCriarComponent,
    ConfigEditarComponent,
    ConfigListarComponent,
    SuporteComponent,
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
    { provide: 'IHttpChamadaServiceToken', useClass: HttpChamadaService },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
