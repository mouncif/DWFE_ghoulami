import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  constructor(private http: HttpClient) {}

  private url = "http://localhost:3000/utilisateur";
  
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    profile: new FormControl("", Validators.required),
    statut: new FormControl("", Validators.required),
    photo: new FormControl("", Validators.required),
    email: new FormControl("",Validators.email),
    dateCreation: new FormControl("", Validators.required),
    dateFin: new FormControl("", Validators.required)
   
  });
  
  initializeFormGroup() {
    this.form.setValue({
      id: null,
      profile: "",
      statut: "",
      photo: "",
      email: "",
      dateCreation: new Date(),
      dateFin: new Date()
    });
  }
  

  findAll() {
    return this.http.get<User[]>(this.url);
  }
  
  add(user) {
    return this.http.post<User>(this.url, user);
  }
  
  delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  }
  
  update(user) {
    return this.http.put(`${this.url}/${user.id}`, user);
  }
  
  populateform(row) {
    this.form.setValue(row);
  }
  
  getAll() {
    return this.http.get<User>(this.url);
  }
}
