import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlurayAddComponent } from './bluray-add.component';

describe('BlurayAddComponent', () => {
  let component: BlurayAddComponent;
  let fixture: ComponentFixture<BlurayAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlurayAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlurayAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
