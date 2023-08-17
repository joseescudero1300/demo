
export const environment = {
  production: true,
  environmentName: "pre-producción",
  api: 'http://10.0.2.36/api-demo-rest',
  api2: 'http://10.0.2.36/otro-api-rest',
  
  // kc login 
  keycloak: {
    url:'http://pre-login.aduana.gob.bo:8083',
    realm: 'login',
    clientId: 'angular-test',
  }
};