import { Injectable } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Produit } from '../models/produit';

@Injectable({
  providedIn: "root"
})
export class ProduitService {
  constructor(private http: HttpClient) {}

  private url = "http://localhost:3000/produit";

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    nom: new FormControl("", Validators.required),
    nomCourt: new FormControl("", Validators.required),
    prixBase: new FormControl(0, Validators.required),
    prixVente: new FormControl(0, Validators.required),
    maxRemise: new FormControl(0, Validators.required),
    unite: new FormControl(""),
    image: new FormControl(""),
    qteInitial: new FormControl(0),
    qteActuel: new FormControl(0)
  });

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      nom: "",
      nomCourt: "",
      prixBase: 0,
      prixVente: 0,
      maxRemise: 0,
      unite: "",
      image: "",
      qteInitial: 0,
      qteActuel: 0
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