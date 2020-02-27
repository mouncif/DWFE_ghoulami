import { Component, OnInit } from "@angular/core";
import { ProduitService } from "../../../services/produit.service";
import { Produit } from "src/app/models/product";
import { Router } from "@angular/router";

@Component({
  selector: "app-produits",
  templateUrl: "./produits.component.html",
  styleUrls: ["./produits.component.css"]
})
export class ProduitsComponent implements OnInit {
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
  onClear() {
    this.service.initializeFormGroup();
    this.service.form.reset();
  }

  ngOnInit() {
    this.service.findAll();
  }

  add() {
    this.service.add(this.produit).subscribe(produit => {
      this.produits = [produit, ...this.produits];
    });
  }

  update() {
    this.service
      .update(this.produit)
      .subscribe(() => this.router.navigateByUrl("/list"));
  }

  onSubmit() {
    if (this.service.form.valid) {
      this.produit = this.service.form.value;
      if (this.service.form.value.id == null) {
        console.log(this.produit);
        this.add();
        this.service.form.reset();
      } else {
        console.log(this.produit);
        this.update();
        this.service.form.reset();
      }
      this.service.initializeFormGroup();
    }
  }
}
