import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() gal: string;
  @Input() est: string;
  @Input() con: string;

  constructor() {
    this.gal ='';
    this.est='';
    this.con='';
   }

  ngOnInit(): void {
  }

}
