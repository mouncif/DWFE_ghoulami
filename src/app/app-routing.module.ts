import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProduitComponent } from "./Gestion-Ventes/produits/produit/produit.component";

const routes: Routes = [{ path: "", component: ProduitComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
