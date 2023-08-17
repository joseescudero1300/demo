# Aduana CORE

Es una plantilla para inicializar proyectos frontend para Angular

## Requisitos

1) NodeJS   v18.x
2) NPM      v9.x
3) Angular  v16.x

## Configuraciones 
1) Agregar el archivo `.npmrc` con la configuración de nexus a su directorio raiz.


## Instalar
Desde GIT
Clonando los archivos de este proyecto
```shell
$ git clone https://ddsgitlab.aduana.gob.bo/sub-sistemas/sen-entorno/sen-angular/sen-ng-demo.git
```
Desde herramienta cli 
1) instalar cli
```shell
$ npm install @aduana/cli
```
2) crear proyecto
```shell
$ npm install @aduana/cli
```

## Estructura basica de una aplicación

**Estructura vertical del proyecto**



Archivo app.component.ts``: 
```html
<an-app title="{{title}}" [disableFluid]="false">
  <app-toolbar-option></app-toolbar-option>
  <app-menu menu></app-menu>
  
  <router-outlet></router-outlet>
</an-app>
```
Donde: 

|Etiqueta|Descripción|
|---|---|
|`<an-app>` | Contenedor principal de una aplicación con la plantilla css. |
|`<an-toolbar-option>`| Permite agregar mas opciones dentro de su contenido al toolbar. |
|`<an-menu>`| Permite visualizar el menu lateral con las opciones de usuario.  |
|`<router-outlet>`| Etiqueta heredada de Angular que nos permite renderizar las paginas definidas en el archivo Router |

**Pagina para contenido :**
```html
<an-page>
    <an-page-header title="Demo Botones" ></an-page-header>
    <an-page-content title="Botones">
    </an-page-content>
</an-page>
```
|Etiqueta|Descripción|
|---|---|
|`<an-page>` | Contenedor principal de una pagina formulario |
|`<an-page-header>`| Permite agregar un header de la pagina |
|`<an-page-content>`| Contenedor de tipo card para encapsular un formulario |

**COMPONENTES**
**BOTONES**
|Etiqueta|Descripción|opciones|
|---|---|---|
|`<an-button>` | Boton con el estilo de plantilla modernize | tipo: `primary|secondary|success|info|warning|danger|light|dark`,<br> icono: `'ti ti-send fs-4 me-2'`,<br> size:`'btn-lg|btn-xs|btn-sm'`  |
|`<an-button-light>`| Bariante del boton pero con estilo light |
|`<an-button-outline>`| Bariante del boton con estilo outline |

|`<an-button-circle>`| Bariante del boton con estilo outline |
|`<app-button-circle-light>`| Bariante del boton con estilo outline |

**Visor de Documentos PDF**
|Etiqueta|Descripción|opciones|
|---|---|---|
|`<an-visor-pdf>`| visualizador de documento PDF | document: `string base64 | url path` |