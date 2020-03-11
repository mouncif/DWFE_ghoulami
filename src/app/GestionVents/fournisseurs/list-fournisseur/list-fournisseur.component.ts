import { Component, OnInit, ViewChild } from '@angular/core';
import { Fournisseur } from '../../../models/fournisseur';
import { FournisseurService } from '../../../services/fournisseur.service';
import { Router } from '@angular/router';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-list-fournisseur',
  templateUrl: './list-fournisseur.component.html',
  styleUrls: ['./list-fournisseur.component.css']
})
export class ListFournisseurComponent implements OnInit {
  fournisseurs: Fournisseur[] = [];
  fournisseur: Fournisseur;
  constructor(private service: FournisseurService, private router: Router) { }

  listData = new MatTableDataSource<Fournisseur>();
  displayedColumns: string[] = ['id', 'nom', 'nomCourt', 'ville', 'adresse', 'telFix', 'telMobile', 'telFax', 'email', 'actions'];
  
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
    this.router.navigate(["/fournisseurs" , "fournisseur"]);
  }

}
