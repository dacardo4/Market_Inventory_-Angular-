import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { CantidadService } from 'src/app/servicios/cantidad.service';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'listaProductos',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  allProductos = [];
  allCantidades = [];
  constructor(
    private _productoService: ProductoService,
    private _cantidadService: CantidadService,
  ) {
    this.getProductos();
    this.getCantidades();
  }

  ngOnInit(): void {
  }

  getProductos(): void {
    this._productoService.getProducto().pipe(take(1)).subscribe(
      data => {
        console.log(data);
        this.allProductos = data;
      }, error => {
        console.log('getProductos Error: ',error);
      }
    );
  }

  getCantidades(): void {
    this._cantidadService.getCantidad().pipe(take(1)).subscribe(
      data => {
        console.log(data);
        this.allCantidades = data;
      }, error => {
        console.log('getProductos Error: ',error);
      }
    );
  }

  nombreProducto(idProducto: number): string {
    let nombre = '';
    console.log(idProducto);
    nombre = this.allProductos[idProducto]['productName'];
    console.log(nombre);
    return nombre;
  }
}
