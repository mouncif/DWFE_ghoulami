import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from "./material/material.module";
import { NavbarComponent } from "./navbar/navbar.component";
import { SideBareComponent } from "./side-bare/side-bare.component";
import { FournisseurComponent } from "./Gestion-Ventes/fournisseur/fournisseur.component";
import { ClientComponent } from "./Gestion-Ventes/client/client.component";
import { ProduitsComponent } from "./Gestion-Ventes/produits/produits.component";
import { ProduitService } from "../services/produit.service";
import { ProduitComponent } from "./Gestion-Ventes/produits/produit/produit.component";
import { PanelComponent } from "./panel/panel.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SideBareComponent,
    ProduitComponent,
    FournisseurComponent,
    ClientComponent,
    ProduitsComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProduitService],
  bootstrap: [AppComponent]
})
export class AppModule {}
