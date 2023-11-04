import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AddToCartService {
  color;
  size;

  constructor() {}

  setColor(color: any) {
    this.color = color; // Set the color property
  }

  getColor() {
    return this.color;
  }

  setSize(size: number) {
    this.size = size;
  }

  getSize() {
    console.log('size service', this.size);
    return this.size;
   
  }
}
