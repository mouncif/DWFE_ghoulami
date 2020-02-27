import { Injectable } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Produit } from "../app/models/product";

@Injectable({
  providedIn: "root"
})
export class ProduitService {
  constructor(private http: HttpClient) {}

  private url = "http://localhost:3000/produits";

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    nom_produit: new FormControl("", Validators.required),
    nom_court_produit: new FormControl("", Validators.required),
    prix_base_produit: new FormControl(0, Validators.required),
    prix_vente_produit: new FormControl(0, Validators.required),
    seuil_max_remise_produit: new FormControl(0, Validators.required),
    unite_produit: new FormControl(""),
    image_produit: new FormControl(""),
    quantite_initiale_stock: new FormControl(0),
    quantite_actuel_stock: new FormControl(0)
  });

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      nom_produit: "",
      nom_court_produit: "",
      prix_base_produit: 0,
      prix_vente_produit: 0,
      seuil_max_remise_produit: 0,
      unite_produit: "",
      image_produit: "",
      quantite_initiale_stock: 0,
      quantite_actuel_stock: 0
    });
  }

  findAll() {
    return this.http.get<Produit[]>(this.url);
  }
  add(produit) {
    return this.http.post<Produit>(this.url, produit);
  }
  delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  }
  update(produit) {
    return this.http.put(`${this.url}/${produit.id}`, produit);
  }

  populateform(row) {
    this.form.setValue(row);
  }

  getAll() {
    return this.http.get<Produit>(this.url);
  }
}
