import { Component, OnInit, Input } from '@angular/core';
import { IceCream } from '../iceCreamInterface';

@Component({
  selector: 'app-ice-cream-detail',
  templateUrl: './ice-cream-detail.component.html',
  styleUrls: ['./ice-cream-detail.component.css']
})
export class IceCreamDetailComponent implements OnInit {

  @Input() iceCream?: IceCream;
  
  constructor() { }

  ngOnInit(): void {
  }

}
