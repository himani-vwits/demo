import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { HeaderComponent } from './header.component';
import {
  AuthenticationService,
  FxHeaderConfigService,
  FxHeaderModule, FxSecurityModule,
  FxTranslationModule,
  LoginService, SecurityConfig
} from '@fx-lib/components';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  const SECURITY_CONFIG: SecurityConfig = undefined;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        FxHeaderConfigService,
        AuthenticationService,
        LoginService,
      ],
      imports: [
        HttpClientTestingModule,
        FxTranslationModule,
        FxHeaderModule,
        FxSecurityModule.forRoot(SECURITY_CONFIG),
        RouterTestingModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
