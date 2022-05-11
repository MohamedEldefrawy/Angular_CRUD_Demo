import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {HttpClient} from "@angular/common/http";
import {FileUpload} from "primeng/fileupload";
import {ProductService} from "../../product.service";

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {

  products: Product[] = [];
  isImageShow: boolean = false;
  displayedColumns: string[] = [];
  display: boolean = false;
  tempProduct: Product = new Product();
  searchKey: string = "";
  displayModal: boolean = false;
  selectedProduct: Product = new Product();

  constructor(private http: HttpClient, public productsService: ProductService) {
  }

  ngOnInit(): void {
    this.toggleTableHeaders();
    this.products = this.productsService.selectAll();
  }

  onRateClicked(rateValue: number, id: number) {
    let selectedProduct = this.productsService.select(id);
    if (selectedProduct)
      selectedProduct.rate = rateValue;
  }

  showDialog() {
    this.display = true;
  }

  edit(id: number) {
    this.products = this.productsService.edit(new Product(this.selectedProduct.id, this.selectedProduct.name,
      this.selectedProduct.image, this.selectedProduct.price
      , this.selectedProduct.date, this.selectedProduct.rate));
    this.displayModal = false;
    this.refreshUi(this.selectedProduct);
  }


  delete(id: number) {
    this.products = this.productsService.delete(id);
  }

  showImage() {
    this.isImageShow = !this.isImageShow;
    this.toggleTableHeaders();
  }

  toggleTableHeaders() {
    if (this.isImageShow)
      this.displayedColumns = ["ID", "Name", "Image", "Price", "Available", "Rate", "Options"]
    else
      this.displayedColumns = ["ID", "Name", "Price", "Available", "Rate", "Options"]
  }

  add() {
    if ((this.tempProduct.id === 0 || this.tempProduct.name === "" || this.tempProduct.image === "" || this.tempProduct.price === 0 || this.tempProduct.rate === 0)) {
    } else {
      this.products = this.productsService.add(new Product(this.tempProduct.id, this.tempProduct.name, this.tempProduct.image, this.tempProduct.price, this.tempProduct.date, this.tempProduct.rate));
      this.refreshUi(this.tempProduct);
    }
  }

  showModalDialog(id: number) {
    let product = this.products.find(product => product.id === id);
    if (product)
      this.selectedProduct = new Product(product.id, product.name, product.image, product.price, product.date, product.rate);
    this.displayModal = true;
  }

  refreshUi(product: Product) {
    product.id = 0;
    product.name = "";
    product.image = "";
    product.price = 0;
    product.date = new Date();
    product.rate = 0;
  }

  onEditProductImageSelected(imagePath: FileUpload) {
    this.selectedProduct.image = imagePath.files[0].name
  }

  onCreateProductImageSelected(imagePath: FileUpload) {
    this.tempProduct.image = imagePath.files[0].name;
  }
}
