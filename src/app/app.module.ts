import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnCoreModule, KeyCloakAuthModule } from '@aduana/an-core';
import { MainPage } from './pages/main-page/main-page.component';
import { SecondPageComponent } from './pages/second-page/second-page.component';
import { MyPageComponent } from './pages/my-page/my-page.component';
import { DemoPageModule } from './pages/demo-page.module';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MainPage,
    SecondPageComponent,
    MyPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AnCoreModule,
    KeyCloakAuthModule.forRoot({
      production: false,
      keycloak: environment.keycloak
    }),
    DemoPageModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
