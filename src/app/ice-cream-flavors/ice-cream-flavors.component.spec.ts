import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IceCreamFlavorsComponent } from './ice-cream-flavors.component';

describe('IceCreamFlavorsComponent', () => {
  let component: IceCreamFlavorsComponent;
  let fixture: ComponentFixture<IceCreamFlavorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IceCreamFlavorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IceCreamFlavorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
