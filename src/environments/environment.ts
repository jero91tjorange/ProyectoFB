// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  app:{
    apiBaseUrl:"https://proyectofb-7e90b-default-rtdb.firebaseio.com/"
  },
  auth:{
    apiBaseUrl:"https://identitytoolkit.googleapis.com", //api base para la autenticacion por lo regular no cambia de proyecto en proyecto checar la documentacion
    key:"AIzaSyAN286HExWbKOWzy_O4k1xceH2Sp3Exeew" //web api key in firebase
  }
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
