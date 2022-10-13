import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './navegacao/home/home.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { rootRouterConfig } from './app.routes';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { ProdutoService } from './produtos/produtos.service';
import { ListarProdutoComponent } from './produtos/listar-produto/listar-produto.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    ContatoComponent,
    SobreComponent,
    DataBindingComponent,
    ListarProdutoComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      [RouterModule.forRoot(rootRouterConfig)]// metodo definido em app.routes
  ],
    providers: [
      ProdutoService,
      {provide: LOCALE_ID, useValue: 'pt-br' },
      {provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL'},
        {provide: APP_BASE_HREF, useValue: '/'}// define a rota padrão da aplicação como /
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
