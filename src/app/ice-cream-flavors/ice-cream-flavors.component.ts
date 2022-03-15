import { Component, OnInit } from '@angular/core';
import { IceCream } from '../iceCreamInterface';

import { IceCreamService } from '../ice-cream.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-ice-cream-flavors',
  templateUrl: './ice-cream-flavors.component.html',
  styleUrls: ['./ice-cream-flavors.component.css'],
})
export class IceCreamFlavorsComponent implements OnInit {
  iceCreamFlavors?: IceCream[];

  selectedIceCream?: IceCream;

  constructor(
    private iceCreamService: IceCreamService,
    private messageService: MessageService
  ) {}

  getIceCream(): void {
    this.iceCreamService
      .getIceCream()
      .subscribe((iceCream) => (this.iceCreamFlavors = iceCream));
  }

  ngOnInit(): void {
    this.getIceCream();
  }

  onSelect(iceCream: IceCream): void {
    this.selectedIceCream = iceCream;
    this.messageService.add(
      `IceCreamComponent: Selected ice cream id=${iceCream.id} and name=${iceCream.name}`
    );
  }
}
