import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedAuthGuardComponent } from './need-auth-guard.component';

describe('NeedAuthGuardComponent', () => {
  let component: NeedAuthGuardComponent;
  let fixture: ComponentFixture<NeedAuthGuardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeedAuthGuardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedAuthGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
