import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs/operators';
import { CantidadService } from 'src/app/servicios/cantidad.service';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'subirProducto',
  templateUrl: './subir.component.html',
  styleUrls: ['./subir.component.scss']
})
export class SubirComponent implements OnInit {

  formularioProducto: FormGroup;
  errorGuardar: boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _productoService: ProductoService,
    private _cantidadService: CantidadService,
  ) {
    this.initForm();
  }

  ngOnInit(): void {
  }

  initForm() {
    this.formularioProducto = this._formBuilder.group({
      nombre: ['', [Validators.required, Validators.maxLength(200)]],
      stock: ['', [Validators.required, Validators.maxLength(200)]],
      cantidad: ['', [Validators.required, Validators.maxLength(200)]]
    });
  }

  submitformularioProducto(event: Event): void {
    event.preventDefault();
    if (this.formularioProducto.valid) this.postProducto();
    else this.formularioProducto.markAllAsTouched();
  }

  postProducto(): void {
    let product = {
      "productName": this.formularioProducto.get('nombre').value,
      "idUser": 1
    };
    this._productoService.postProducto(product).pipe(take(1)).subscribe(
      data => {
        console.log(data);
        this.postCantidad(data.id);
      }, error => {
        console.log('postProducto Error: ',error);
        this.errorGuardar = true;
      }
    );
  }

  postCantidad(idProduct: number): void {
    let cantidad = {
      "idProduct": idProduct,
      "quantityInStock": this.formularioProducto.get('stock').value,
      "quantityToBuy": this.formularioProducto.get('cantidad').value,
      "idUser": 1
    };
    this._cantidadService.postCantidad(cantidad).pipe(take(1)).subscribe(
      data => {
        console.log(data);
        this.formularioProducto.reset();
      }, error => {
        console.log('postProducto Error: ',error);
        this.errorGuardar = true;
      }
    );
  }

}
