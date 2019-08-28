import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInterface } from '../interfaces/producto.interface'; //cargo interface de producto json

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos : ProductoInterface[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
   }

   private cargarProductos(){
     this.http.get('https://angular-html-f2929.firebaseio.com/productos_idx.json')
      .subscribe((res:ProductoInterface[] )=> {
        this.productos = res;
        this.cargando = false;
      });
   }
}
