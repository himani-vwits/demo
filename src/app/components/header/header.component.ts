import { Component, OnInit } from '@angular/core';
import {
  AuthenticationService, BoundaryDataService, BoundarySelectorDataService, BoundarySelectorResource,
  FxBoundarySelectorComponent,
  FxHeaderConfigModel,
  FxHeaderConfigService,
  FxLoginComponent,
  FxWikiComponent,
  FxConfidentialityLogoComponent
} from '@fx-lib/components';
import { of } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public config: FxHeaderConfigModel;
  public currentCp8Plant = '11';
  constructor(private fxHeaderConfigService: FxHeaderConfigService,
              private authenticationService: AuthenticationService,
              private boundaryDataService: BoundaryDataService,
              private boundarySelectorDataService: BoundarySelectorDataService) {

    this.authenticationService.loginEvents.subscribe(() => {
      if (this.authenticationService.isLoggedIn) {
        this.boundaryDataService.getBoundariesForUserScope().subscribe((boundaryResourceList: BoundarySelectorResource[]) => {
          this.boundarySelectorDataService.setBoundaryResourceList(boundaryResourceList);
        });
      }
    });

    this.fxHeaderConfigService.setConfig({
      logoPath: '../../../../../assets/images/FX_Logo_White.png',
      appTitle: 'App Title',
      appTitleShort: 'App Title',
      routes: [
        { name: 'i18n.group-list.title', route: '/groups/list' }
      ],
      staticComponents: [
        { componentClass: FxWikiComponent, config: { inputs: of([{ key: 'color', value: 'white' }]) } },
        { componentClass: FxConfidentialityLogoComponent, config: {
            inputs: of([
              { key: 'logoType', value: 'internal_scaled' },
              { key: 'logoHeight', value: '32' },
              { key: 'logoColor', value: 'white' }
            ])
          }}
      ],
      components: [
        { componentClass: FxBoundarySelectorComponent, config: {
            inputs: of([
              { key: 'dropDownStyling', value: 'fx-styling' },
              { key: 'icon', value: 'fasIndustry ' }
            ])
          }},
        { componentClass: FxLoginComponent, config: {
            inputs: of([
              { key: 'dropDownStyling', value: 'fx-styling' },
              { key: 'icon', value: 'fasUser' }
            ])
          }}
      ],
    });

  }
  
  ngOnInit() {
  }

}
