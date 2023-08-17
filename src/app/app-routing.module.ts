import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPage } from './pages/main-page/main-page.component';
import { SecondPageComponent } from './pages/second-page/second-page.component';
import { MyPageComponent } from './pages/my-page/my-page.component';
import { NotFoundPage } from '@aduana/an-core';
import { NotificacionesPage } from './pages/notificaciones-page/notificaciones-page.component';
import { SelectorPageComponent } from './pages/selector-page/selector-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { ButtonsPage } from './pages/buttons-page/buttons-page.component';
import { DocumentPageComponent } from './pages/document-page/document-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPage
  },
  {
    path: 'usuario',
    component: SecondPageComponent,
  },
  {
    path: 'mi-pagina',
    component: MyPageComponent
  },
  // demos
  {
    path: 'botones',
    component: ButtonsPage
  },

  {
    path: 'listas',
    component: ListPageComponent
  },
  {
    path: 'selector',
    component: SelectorPageComponent
  },
  {
    path: 'notificaciones',
    component: NotificacionesPage
  },
  {
    path: 'documento',
    component: DocumentPageComponent
  },
  {
    path: '**',
    component: NotFoundPage
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
