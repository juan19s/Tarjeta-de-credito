import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TarjetaCredito } from 'src/app/modells/TarjetaCredito';
import { TarjetaService } from 'src/app/service/tarjeta.service';

@Component({
  selector: 'app-crear-tarjeta',
  templateUrl: './crear-tarjeta.component.html',
  styleUrls: ['./crear-tarjeta.component.css']
})
export class CrearTarjetaComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder,
    private tarjetaService: TarjetaService,
    private toastr: ToastrService
    ) {
    this.form = this.fb.group({
      titular: ['', Validators.required],
      numero: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      fecha: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]]
    })
   }

  ngOnInit(): void {
  }

  crearTarjeta() {
    const tarjeta: TarjetaCredito= {
      titular: this.form.value.titular,
      numeroTarjeta: this.form.value.numero,
      fechaExpiracion: this.form.value.fecha,
      cvv: this.form.value.cvv,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date()
  }
  this.tarjetaService.guardarTarjeta(tarjeta).then(() => {
    this.toastr.success('La tarjeta fue registrada con exito!', 'Tarjeta Registrada');
    this.form.reset();
  }, error => {
    console.log(error);
  });
  }
}
