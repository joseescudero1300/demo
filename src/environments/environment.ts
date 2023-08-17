// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
export const environment = {
  production: false,
  environmentName: "desarrollo",
  api: 'http://desa-servicios.aduana.gob.bo',
  // api: 'http://localhost:5000',
  api2: 'http://10.0.2.36/otro-api-rest',

  // kc login 
  keycloak: {
    url:'http://desa-login.aduana.gob.bo:8083',
    realm: 'login',
    clientId: 'angular-test',
  }
};
