import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Produit } from '../../../models/produit';
import { ProduitService } from '../../../services/produit.service';

@Component({
  selector: "app-produits",
  templateUrl: "./produit.component.html",
  styleUrls: ["./produit.component.css"]
})
export class ProduitComponent implements OnInit {
  private produit: Produit = {
    nom: "",
    nomCourt: "",
    prixBase: 0,
    prixVente: 0,
    maxRemise: 0,
    unite: "",
    image: "",
    qteInitial: 0,
    qteActuel: 0
  };
  //image : string = "";
  produits: Produit[] = [];
  constructor(public service: ProduitService, private router: Router) {}
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
      this.service.form.reset();
      this.router.navigate(["/produits/"]);
    });
  }

  update() {
    this.service
      .update(this.produit)
      .subscribe(() => this.router.navigate(["/produits/"]));
  }

  onSubmit() {
    if (this.service.form.valid) {
      this.produit = this.service.form.value;
      if (this.service.form.value.id == null) {
        console.log(this.produit);
        this.add();
      } else {
        console.log(this.produit);
        this.update();
        this.service.form.reset();
      }
      this.service.initializeFormGroup();
    }
  }

  // onInputFile(event : Event){
  //   this.image = (<HTMLInputElement>event.target).value;
  // }
}