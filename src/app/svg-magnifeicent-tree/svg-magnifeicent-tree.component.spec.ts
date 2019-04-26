import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgMagnifeicentTreeComponent } from './svg-magnifeicent-tree.component';

describe('SvgMagnifeicentTreeComponent', () => {
  let component: SvgMagnifeicentTreeComponent;
  let fixture: ComponentFixture<SvgMagnifeicentTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgMagnifeicentTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgMagnifeicentTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
