import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaHotelsComponent } from './lista-hotels.component';

describe('ListaHotelsComponent', () => {
  let component: ListaHotelsComponent;
  let fixture: ComponentFixture<ListaHotelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaHotelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
