// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  securityConfig: {
    authorization_service_url: 'https://pre-user-resource-service.apps.emea.vwapps.io/',
    authorization_ui_url: 'https://pre-urs.apps.emea.vwapps.io/',
    app_name: 'FX4PG',
    app_domain: '',
    idp_base_url: 'https://idp.cloud.vwgroup.com/auth/realms/kums/protocol/openid-connect/',
    client_id: 'idp-964bd1ee-2ca1-4c52-b921-a8df53595dae',
    login_redirect_url: 'https://localhost:4200/auth',
    logout_redirect_url: 'https://localhost:4200/logged-out',
    roles: {
      view: [],
      edit: [],
      devops: []
    },
    boundary_name: 'Plant'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
