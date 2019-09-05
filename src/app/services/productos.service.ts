import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInterface } from '../interfaces/producto.interface'; //cargo interface de producto json

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: ProductoInterface[] = [];
  productosFiltrado: ProductoInterface[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
   }

   private cargarProductos() {
    return new Promise((resolve, reject ) => {

this.http.get('https://angular-html-f2929.firebaseio.com/productos_idx.json')
      .subscribe((res: ProductoInterface[] ) => {
        this.productos = res;
        this.cargando = false;
        resolve();
      });

    });
   }

   getProducto(id: string){
     return this.http.get(`https://angular-html-f2929.firebaseio.com/productos/${id}.json`);
   }

   buscarProducto(termino: string) {
    if (this.productos.length === 0) {
    this.cargarProductos().then(() => {
    this.filtrarProductos(termino);
  });
  } else {
      this.filtrarProductos(termino);
  }

    this.productosFiltrado = this.productos.filter(producto => {
      return true;
    });
   }

   private filtrarProductos(termino: string) {
            this.productosFiltrado = [];
            termino = termino.toLocaleLowerCase();

      this.productos.forEach( prod => {

        const tituloLower = prod.titulo.toLocaleLowerCase();

          if (prod.categoria.indexOf(termino )>= 0 || tituloLower.indexOf(termino )>= 0){
            this.productosFiltrado.push(prod);
          }
      });
   }
}
