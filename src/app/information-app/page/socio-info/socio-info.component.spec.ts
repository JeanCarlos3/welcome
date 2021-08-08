import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocioInfoComponent } from './socio-info.component';

describe('SocioInfoComponent', () => {
  let component: SocioInfoComponent;
  let fixture: ComponentFixture<SocioInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocioInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocioInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
