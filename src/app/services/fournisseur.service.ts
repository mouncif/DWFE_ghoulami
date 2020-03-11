import { Injectable } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Fournisseur } from '../models/fournisseur';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
  
constructor(private http: HttpClient) {}

private url = "http://localhost:3000/fournisseur";

form: FormGroup = new FormGroup({
  id: new FormControl(null),
  nom: new FormControl("", Validators.required),
  nomCourt: new FormControl("", Validators.required),
  ville: new FormControl("", Validators.required),
  adresse: new FormControl("", Validators.required),
  telFix: new FormControl("",[Validators.required,Validators.minLength(8)]),
  telMobile: new FormControl("",[Validators.required,Validators.minLength(8)]),
  telFax: new FormControl("",[Validators.required,Validators.minLength(8)]),
  email: new FormControl("",Validators.email),
});

initializeFormGroup() {
  this.form.setValue({
    id: null,
    nom: "",
    nomCourt: "",
    ville: "",
    adresse: "",
    telFix: "",
    telMobile: "",
    telFax: "",
    email: ""
  });
}

findAll() {
  return this.http.get<Fournisseur[]>(this.url);
}

add(fournisseur) {
  return this.http.post<Fournisseur>(this.url, fournisseur);
}

delete(id) {
  return this.http.delete(`${this.url}/${id}`);
}

update(fournisseur) {
  return this.http.put(`${this.url}/${fournisseur.id}`, fournisseur);
}

populateform(row) {
  this.form.setValue(row);
}

getAll() {
  return this.http.get<Fournisseur>(this.url);
}
}
