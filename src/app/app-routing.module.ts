import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';

//creo las rutas
const routes: Routes = [
  {path:'home', component:PortafolioComponent},
  {path:'about', component:AboutComponent},
  {path:'item/:id', component:ItemComponent},
  {path:'search/:termino', component:SearchComponent},
  {path:'**', pathMatch:'full', redirectTo:'home'}
];

//importo las rutas
@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash:true})],  //{ useHash:true} para no usar el htacces en el ruteo del servidor ej algo/home/1 ahora #/home/1 porque no esta en el servidor
  exports: [RouterModule]
})
export class AppRoutingModule { }
