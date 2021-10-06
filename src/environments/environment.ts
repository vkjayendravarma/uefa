// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  
  
  // Local Server Settings
  apiUrl: 'http://localhost:3100',
  baseUrl: 'http://localhost:4200',
  socketIoConfig: {
    url: 'http://localhost:3100',
    options: {}
  },
  
  // Test Server Settings
  // apiUrl: 'http://sports.verdentum.org/server',
  // baseUrl: 'http://sports.verdentum.org',
  // socketIoConfig: {
  //   url: 'http://sports.verdentum.org/server',
  //   options: {}
  // },

  
  
  maxFilesize: {
    label: '2MB',
    value: 2097152
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
