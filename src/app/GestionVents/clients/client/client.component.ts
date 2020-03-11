import { Component, OnInit } from '@angular/core';
import { Client } from '../../../models/client';
import { Router } from '@angular/router';
import { ClientService } from '../../../services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  
  private client: Client = {
    nom: "",
    prenom: "",
    statut: "",
    photo: "",
    tel: "",
    email: "",
    adresse: "",
    ville: ""
};

//image : string = this.client.photo;
clients: Client[] = [];

constructor(public service: ClientService, private router: Router) {}

ngOnInit() {
  this.service.findAll();
}

onClear() {
  this.service.initializeFormGroup();
  this.service.form.reset();
}



add() {
  this.service.add(this.client).subscribe(client => {
    this.clients = [client, ...this.clients];
    this.service.form.reset();
    this.router.navigate(["/clients/"]);
  });
}

update() {
  this.service
    .update(this.client)
    .subscribe(() => this.router.navigate(["/clients/"]));
}

onSubmit() {
  if (this.service.form.valid) {
    this.client = this.service.form.value;
    if (this.service.form.value.id == null) {
      console.log(this.client);
      this.add();
    } else {
      console.log(this.client);
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
