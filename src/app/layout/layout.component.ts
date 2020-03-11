import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  path : string[] = [];
  last : number;
  constructor(private router : Router) { 
    router.events.subscribe(()=>{
      this.path = window.location.href.split('/').slice(3,);
      this.last = this.path.length - 1;
    });
  }


  ngOnInit() {
  }

}
