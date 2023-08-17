import { Component } from '@angular/core';
import { MiServicio } from 'src/app/services/mi-servicio.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPage {
    hello() {
      this.miServicio.setData("Nuevo valor");
    }

    constructor (private miServicio:MiServicio) {

    }
}
