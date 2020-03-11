import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UtilisateurService } from '../../services/utilisateur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {

  private user: User = {
      profile: "",
      statut: "",
      photo: "",
      email: "",
      dateCreation: new Date(),
      dateFin: new Date()
};

//image : string = "";
users: User[] = [];

constructor(public service: UtilisateurService, private router: Router) {}

ngOnInit() {
  this.service.findAll();
}

onClear() {
  this.service.initializeFormGroup();
  this.service.form.reset();
}



add() {
  this.service.add(this.user).subscribe(user => {
    this.users = [user, ...this.users];
    this.service.form.reset();
    this.router.navigate(["/users/"]);
  });
}

update() {
  this.service
    .update(this.user)
    .subscribe(() => this.router.navigate(["/users/"]));
}

onSubmit() {
  if (this.service.form.valid) {
    this.user = this.service.form.value;
    if (this.service.form.value.id == null) {
      console.log(this.user);
      this.add();
    } else {
      console.log(this.user);
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
