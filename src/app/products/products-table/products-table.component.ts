import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/product";

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {

  products: Product[] = [];
  isImageShow: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    this.products = [
      new Product(1, "X", "18.jpg", 10, new Date(), 1),
      new Product(2, "Y", "18.jpg", 20, new Date(), 2),
      new Product(3, "Z", "18.jpg", 30, new Date(), 3),
      new Product(4, "A", "18.jpg", 40, new Date(), 4),
      new Product(5, "B", "18.jpg", 50, new Date(), 5),
    ];
  }

}
