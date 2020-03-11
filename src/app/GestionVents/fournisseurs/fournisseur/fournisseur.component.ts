import { Component, OnInit } from '@angular/core';
import { FournisseurService } from '../../../services/fournisseur.service';
import { Router } from '@angular/router';
import { Fournisseur } from '../../../models/fournisseur';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {
  private fournisseur: Fournisseur = {
  nom: "",
  nomCourt: "",
  ville: "",
  adresse: "",
  telFix: "",
  telMobile: "",
  telFax: "",
  email: ""
};

fournisseurs: Fournisseur[] = [];
constructor(public service: FournisseurService, private router: Router) {}

onClear() {
  this.service.initializeFormGroup();
  this.service.form.reset();
}

ngOnInit() {
  this.service.findAll();
}

add() {
  this.service.add(this.fournisseur).subscribe(produit => {
    this.fournisseurs = [produit, ...this.fournisseurs];
    this.service.form.reset();
    this.router.navigate(["/fournisseurs/"]);
  });
}

update() {
  this.service
    .update(this.fournisseur)
    .subscribe(() => this.router.navigate(["/fournisseurs/"]));
}

onSubmit() {
  if (this.service.form.valid) {
    this.fournisseur = this.service.form.value;
    if (this.service.form.value.id == null) {
      console.log(this.fournisseur);
      this.add();
    } else {
      console.log(this.fournisseur);
      this.update();
      this.service.form.reset();
    }
    this.service.initializeFormGroup();
  }
}

}
