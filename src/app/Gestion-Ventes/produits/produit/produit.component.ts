import { Component, OnInit } from "@angular/core";
import { Produit } from "../../../models/product";
import { ProduitService } from "../../../../services/produit.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-produit",
  templateUrl: "./produit.component.html",
  styleUrls: ["./produit.component.css"]
})
export class ProduitComponent implements OnInit {
  private produit: Produit = {
    nom_produit: "",
    nom_court_produit: "",
    prix_base_produit: 0,
    prix_vente_produit: 0,
    seuil_max_remise_produit: 0,
    unite_produit: "",
    image_produit: "",
    quantite_initiale_stock: 0,
    quantite_actuel_stock: 0
  };

  produits: Produit[] = [];

  constructor(private service: ProduitService, private router: Router) {}

  ngOnInit() {}
}
