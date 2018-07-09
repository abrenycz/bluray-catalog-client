import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlurayListComponent } from './bluray-list.component';

describe('BlurayListComponent', () => {
  let component: BlurayListComponent;
  let fixture: ComponentFixture<BlurayListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlurayListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlurayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
