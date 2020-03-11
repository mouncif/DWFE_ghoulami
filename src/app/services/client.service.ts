import { Injectable } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private url = "http://localhost:3000/client";
  
  constructor(private http: HttpClient) {}
  
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    nom: new FormControl("", Validators.required),
    prenom: new FormControl("", Validators.required),
    statut: new FormControl("", Validators.required),
    photo: new FormControl("", Validators.required),
    tel: new FormControl("",[Validators.required,Validators.minLength(8)]),
    email: new FormControl("",Validators.email),
    adresse: new FormControl("", Validators.required),
    ville: new FormControl("",Validators.required)
  });
  
  initializeFormGroup() {
    this.form.setValue({
      id: null,
      nom: "",
      prenom: "",
      statut: "",
      photo: "",
      tel: "",
      email: "",
      adresse: "",
      ville: ""
    });
  }

  findAll() {
    return this.http.get<Client[]>(this.url);
  }
  
  add(client) {
    return this.http.post<Client>(this.url, client);
  }
  
  delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  }
  
  update(client) {
    return this.http.put(`${this.url}/${client.id}`, client);
  }
  
  populateform(row) {
    this.form.setValue(row);
  }
  
  getAll() {
    return this.http.get<Client>(this.url);
  }
}
