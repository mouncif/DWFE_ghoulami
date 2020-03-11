import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Produit } from '../../../models/produit';
import { ProduitService } from '../../../services/produit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit {
  produits: Produit[] = [];
  produit: Produit;
  constructor(private service: ProduitService, private router: Router) { }

  listData = new MatTableDataSource<Produit>();
  displayedColumns: string[] = ['id', 'nom', 'nomCourt', 'prixBase', 'prixVente', 'maxRemise', 'unite', 'qteInitial', 'qteActuel','image', 'actions'];

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
    this.router.navigate(["/produits" , "produit"]);
  }


}
