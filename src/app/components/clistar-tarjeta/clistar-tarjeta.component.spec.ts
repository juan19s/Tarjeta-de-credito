import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClistarTarjetaComponent } from './clistar-tarjeta.component';

describe('ClistarTarjetaComponent', () => {
  let component: ClistarTarjetaComponent;
  let fixture: ComponentFixture<ClistarTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClistarTarjetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClistarTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
