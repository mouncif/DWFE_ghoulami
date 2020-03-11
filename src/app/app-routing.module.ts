
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitComponent } from './GestionVents/produits/produit/produit.component';
import { ClientComponent } from './GestionVents/clients/client/client.component';
import { UtilisateurComponent } from './utilisateurs/utilisateur/utilisateur.component';
import { AboutComponent } from './about/about.component';
import { ProduitsComponent } from './GestionVents/produits/produits.component';
import { ListProduitComponent } from './GestionVents/produits/list-produit/list-produit.component';
import { FournisseurComponent } from './GestionVents/fournisseurs/fournisseur/fournisseur.component';
import { ListFournisseurComponent } from './GestionVents/fournisseurs/list-fournisseur/list-fournisseur.component';
import { ClientsComponent } from './GestionVents/clients/clients.component';
import { ListClientComponent } from './GestionVents/clients/list-client/list-client.component';
import { ListUtilisateurComponent } from './utilisateurs/list-utilisateur/list-utilisateur.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { FournisseursComponent } from './GestionVents/fournisseurs/fournisseurs.component';


const routes: Routes = [
  { path: "", component: AboutComponent },
  { path: "produits", component: ProduitsComponent , children : [ 
    { path: "", component: ListProduitComponent },
    { path: "produit", component: ProduitComponent },
  ] },
  { path: "fournisseurs", component: FournisseursComponent , children : [ 
    { path: "", component: ListFournisseurComponent },
    { path: "fournisseur", component: FournisseurComponent },
  ] },
  { path: "clients", component: ClientsComponent , children : [ 
    { path: "", component: ListClientComponent },
    { path: "client", component: ClientComponent },
  ] },
  { path: "users", component: UtilisateursComponent , children : [ 
    { path: "", component: ListUtilisateurComponent },
    { path: "user", component: UtilisateurComponent },
  ] },
  { path: "about", component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
