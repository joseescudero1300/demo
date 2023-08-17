import { AuthService, BreadCrumb, Respuesta, RolesService, SessionService } from '@aduana/an-core';
import { Generico } from '@aduana/an-core/lib/core/models/generico.model';
import { ICrearEmpleadoDto, IEmpleado, IRecuperarEmpleadoDto } from '@aduana/sen-onion-demo-rest-dom-itf';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ObjRespuestaLista } from 'src/app/models/ObjetoRespuesta';
import { EmpleadoService } from 'src/app/services/empleado-service.service';
import { MiServicio } from 'src/app/services/mi-servicio.service';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent implements OnInit {
  userInfo : any = {};
  roles : any = {};
  constructor (
    private rolesService:RolesService, 
    private authService: AuthService,
    private miServicio:MiServicio,
    private empleadoService:EmpleadoService,
    private httpClient : HttpClient,
    private sessionService: SessionService
    ) {    
  }

  miDato:string= '';
  list?: IRecuperarEmpleadoDto [] = [];
  
  listBread:BreadCrumb[] = [
    {
      link: '/asdas',
      titulo: 'Sistema'
    },
    {
      link: '/subsistema',
      titulo: 'Sub-sistema'
    }
  ];

  ngOnInit(): void {
    this.rolesService.data$.subscribe( data=>
      this.roles = data
    );

    this.userInfo =  this.authService.getLoggedUser();
    this.miServicio.data$.subscribe ( data => this.miDato = data);

    console.log('Session service', this.sessionService.getAduana());
    // llamada al servicio
    this.getValue();
  }

  getLista () {
    this.empleadoService
      .listaEmpleados()
      .subscribe(data=>{
        this.list = data.respuesta?.empleados;
      });
  }

  guardarEmpleado () {
    let empleado: ICrearEmpleadoDto = {
      nombres: 'Juan',
      apellidos: 'Pinto P.',
      codigoEmpleado: '002'
    } as ICrearEmpleadoDto;

    this.empleadoService
    .guardarEmpleado(empleado)
    .subscribe(data=>{
      console.log(data);
    });
  }


  /** Ejemplo de load  */

  getValue () {
    // https://jsonplaceholder.typicode.com/albums
    return this.httpClient.get('https://jsonplaceholder.typicode.com/albums').subscribe (data => {
       console.log('update --array');
        this.listaObj = this.parseArray(data);
    });
  }

  listArticle: any [] = [];
  dataWS: any = '';
  getToken () {
    return this.httpClient.get ('http://10.0.2.36:5000/sen-onion-demo-rest/roles/roles2').subscribe ( data => {
      console.log('...: LOG token :...\n', JSON.stringify(data, null ,4));
      this.dataWS = JSON.stringify(data, null ,4);
    });
  }

  parseArray (array: any) {
    const updatedOrderingData = array.map((item: any, index: number) => { return { valor: item.title, clave: item.id+'' }});
    return updatedOrderingData;
  }
  
  listaObj: Generico [] = [];
  keyValueSelected: Generico = {};

}
