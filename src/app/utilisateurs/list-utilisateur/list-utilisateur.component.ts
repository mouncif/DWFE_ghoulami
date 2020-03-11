import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/user';
import { UtilisateurService } from '../../services/utilisateur.service';
import { Router } from '@angular/router';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-list-utilisateur',
  templateUrl: './list-utilisateur.component.html',
  styleUrls: ['./list-utilisateur.component.css']
})
export class ListUtilisateurComponent implements OnInit {
  users: User[] = [];
  user: User;
  constructor(private service: UtilisateurService, private router: Router) { }

  listData = new MatTableDataSource<User>();
  displayedColumns: string[] = ['id', 'profile', 'statut', 'email','dateCreation','dateFin','photo', 'actions'];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.fetchElements();
    this.listData.sort = this.sort;
    this.listData.paginator = this.paginator;
  }

  fetchElements() {
    this.service.findAll().subscribe(res => {
      if (!res) return;
      console.log(res);
      this.listData = new MatTableDataSource(res as any);
    });
  }

  applyFilter(filterValue: string) {
    this.listData.filter = filterValue.trim().toLowerCase();
  }

  onDelete(id) {
    if (confirm('Are you sure?')) {
      this.delete(id);
    }
  }

  delete(id) {
    this.service.delete(id).subscribe(() => {
      this.fetchElements();
    })
  }

  onEdit(row) {
    this.service.populateform(row);
    console.log(row);
    this.router.navigate(["/users", "user"]);
  }


}

