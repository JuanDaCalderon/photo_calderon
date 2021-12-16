import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: `./galeria.component.html`,
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {
  galActive: string;
  estActive: string;
  conActive: string;
  cardImages: string[];

  constructor() {
    this.cardImages = [ '../../../assets/images/unsplash-photo-1.jpg', '../../../assets/images/unsplash-photo-2.jpg', '../../../assets/images/unsplash-photo-3.jpg'];
    this.galActive = 'active';
    this.estActive = '';
    this.conActive = '';
  }

  ngOnInit(): void {
  }

}
