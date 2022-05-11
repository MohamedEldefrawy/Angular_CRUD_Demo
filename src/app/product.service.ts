import {Injectable} from '@angular/core';
import {Product} from "./model/product";
import {publishFacade} from "@angular/compiler";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [];

  constructor() {
    this.products = [
      new Product(1, "ITI X", "18.jpg", 10, new Date(), 1),
      new Product(2, "ITI Y", "18.jpg", 20, new Date(), 2),
      new Product(3, "AIET Z", "18.jpg", 30, new Date(), 3),
      new Product(4, "AIET A", "18.jpg", 40, new Date(), 4),
      new Product(5, "AIET B", "18.jpg", 50, new Date(), 5),
    ];
  }

  public add(product: Product) {
    let temp = [...this.products];
    temp.push(product);
    this.products = temp;
    return temp;
  }

  public edit(product: Product) {
    let selectedProductIndex = this.products.findIndex(p => p.id === product.id);
    let temp = [...this.products];
    temp.splice(selectedProductIndex, 1, product);
    this.products = temp;
    return temp;
  }

  public selectAll() {
    return this.products;
  }

  public select(id: number) {
    return this.products.find(p => p.id === id);
  }

  public delete(id: number) {
    let selectedProductIndex = this.products.findIndex(p => p.id === id);
    let temp = [...this.products];
    temp.splice(selectedProductIndex, 1);
    this.products = temp
    return temp;
  }
}
