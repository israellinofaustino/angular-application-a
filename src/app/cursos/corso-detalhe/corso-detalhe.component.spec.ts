import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorsoDetalheComponent } from './corso-detalhe.component';

describe('CorsoDetalheComponent', () => {
  let component: CorsoDetalheComponent;
  let fixture: ComponentFixture<CorsoDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorsoDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorsoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
