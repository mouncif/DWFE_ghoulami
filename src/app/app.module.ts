import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from "./material/material.module";
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutComponent } from './layout/layout.component';
import { ProduitComponent } from './GestionVents/produits/produit/produit.component';
import { ClientComponent } from './GestionVents/clients/client/client.component';
import { UtilisateurComponent } from './utilisateurs/utilisateur/utilisateur.component';
import { AboutComponent } from './about/about.component';
import { ProduitsComponent } from './GestionVents/produits/produits.component';
import { ListProduitComponent } from './GestionVents/produits/list-produit/list-produit.component';
import { FournisseursComponent } from './GestionVents/fournisseurs/fournisseurs.component';
import { FournisseurComponent } from './GestionVents/fournisseurs/fournisseur/fournisseur.component';
import { ListFournisseurComponent } from './GestionVents/fournisseurs/list-fournisseur/list-fournisseur.component';
import { ClientsComponent } from './GestionVents/clients/clients.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { ListUtilisateurComponent } from './utilisateurs/list-utilisateur/list-utilisateur.component';
import { ListClientComponent } from './GestionVents/clients/list-client/list-client.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, LayoutComponent, ProduitComponent, ClientComponent, UtilisateurComponent, AboutComponent, ProduitsComponent, ListProduitComponent, FournisseursComponent, FournisseurComponent, ListFournisseurComponent, ClientsComponent, UtilisateursComponent, ListUtilisateurComponent , ListClientComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
