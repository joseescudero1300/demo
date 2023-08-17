import { AuthService, MenuService, RolesService, SessionService } from '@aduana/an-core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Mi aplicación';
  
  constructor (private menuService: MenuService, private authService: AuthService, private sessionService: SessionService, private rolesService:RolesService) {}
  ngOnInit(): void {
    let token: any = this.authService.getLoggedUser();

    this.menuService.downloadMenu('DEMO','DEMOANGULAR');
    // this.menuService.downloadMenu(token["user_info"].usuarioId,'DEMOANGULAR');

    this.sessionService.setData(token["user_info"].persona);
    this.rolesService.setData(token["user_info"].rolesUser);
  }

}
