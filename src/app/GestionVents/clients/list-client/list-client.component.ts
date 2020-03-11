import { Component, OnInit, ViewChild } from '@angular/core';
import { Client } from '../../../models/client';
import { ClientService } from '../../../services/client.service';
import { Router } from '@angular/router';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {
  clients: Client[] = [];
  client: Client;
  constructor(private service: ClientService, private router: Router) { }

  listData = new MatTableDataSource<Client>();
  displayedColumns: string[] = ['id', 'nom', 'prenom', 'statut', 'tel', 'email', 'adresse', 'ville', 'photo', 'actions'];

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

  onDelete(id){
    if(confirm('Are you sure?')){
      this.delete(id);
    }
  }

  delete(id){
    this.service.delete(id).subscribe(()=>{
      this.fetchElements();
    })
  }

  onEdit(row){
    this.service.populateform(row);
    console.log(row);
    this.router.navigate(["/clients" , "client"]);
  }


}
