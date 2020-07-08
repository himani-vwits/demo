import {BrowserModule, Title} from '@angular/platform-browser';
import {APP_INITIALIZER, LOCALE_ID, NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {CommonModule, registerLocaleData} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import localeDe from '@angular/common/locales/de';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FxBoundarySelectorModule,
  FxConfidentialityLogoModule,
  FxSecurityModule,
  FxNotificationModule,
  FxTranslationModule, FxWikiModule, FxSearchInputModule, FxHeaderModule } from '@fx-lib/components';
import {FooterComponent} from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NgxUiLoaderConfig, NgxUiLoaderModule } from 'ngx-ui-loader';
import { environment } from '../environments/environment'

const NGX_UI_LOADER_FX_CONFIG: NgxUiLoaderConfig = {
  fgsColor: '#004666',
  fgsSize: 70,
  fgsType: 'circle',
  fgsPosition: 'center-center',
  overlayColor: 'rgba(255,255,255,0.9)',
  hasProgressBar: false
};

registerLocaleData(localeDe, 'de');
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    RouterModule.forRoot([]),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FxTranslationModule,
    FxBoundarySelectorModule,
    FxConfidentialityLogoModule,
    FxSecurityModule.forRoot(environment.securityConfig),
    FxNotificationModule,
    FxWikiModule, FxSearchInputModule, FxHeaderModule,
    NgxUiLoaderModule.forRoot(NGX_UI_LOADER_FX_CONFIG)
  ],
  exports: [
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'de-DE' },
    Title
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }