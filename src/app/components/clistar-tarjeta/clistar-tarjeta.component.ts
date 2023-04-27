import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { TarjetaCredito } from 'src/app/modells/TarjetaCredito';
import { TarjetaService } from 'src/app/service/tarjeta.service';

@Component({
  selector: 'app-clistar-tarjeta',
  templateUrl: './clistar-tarjeta.component.html',
  styleUrls: ['./clistar-tarjeta.component.css']
})
export class ClistarTarjetaComponent implements OnInit {
  listTarjetas: any[] = [];

  constructor(private tarjeta: TarjetaService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerTarjetas();
  }

  obtenerTarjetas() {
    this.tarjeta.getTarjetas().subscribe(data => {
      console.log(data);
      this.listTarjetas = [];
      data.forEach((element: any) => {
        this.listTarjetas.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.listTarjetas);
    });
  }

  eliminarTarjeta(id: string) {
    this.tarjeta.eliminarTarjeta(id).then(() => {
      console.log('Tarjeta eliminada con exito!');
      this.toastr.error('La tarjeta fue eliminada con exito!', 'Tarjeta Eliminada');
    }).catch(error => {
      this.toastr.error('Opss... ocurrio un error!', 'Error');
      console.log(error);
    })
  }

  editarTarjeta(tarjeta: TarjetaCredito) {
    console.log(tarjeta);
    this.tarjeta.addTarjetaEditada(tarjeta);
  }

  
}
