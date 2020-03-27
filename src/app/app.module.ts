import { ClienteService } from './cliente/servico/cliente.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { ClienteComponent } from './cliente/cliente.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClienteManterComponent } from './cliente/cliente-manter/cliente-manter.component';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoManterComponent } from './produto/produto-manter/produto-manter.component';
import { ProdutoService } from './produto/servico/produto.service';
import { VendaComponent } from './venda/venda.component';
import { VendaManterComponent } from './venda/venda-manter/venda-manter.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ClienteComponent,
    ClienteManterComponent,
    ProdutoComponent,
    ProdutoManterComponent,
    VendaComponent,
    VendaManterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [
    ClienteService,
    ProdutoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
