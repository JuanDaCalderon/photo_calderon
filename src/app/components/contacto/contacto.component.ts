import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: `./contacto.component.html`,
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  galActive: string;
  estActive: string;
  conActive: string;
  constructor() {
    this.galActive='';
    this.estActive='';
    this.conActive='active';
  }

  ngOnInit(): void {
  }

}
