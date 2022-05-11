import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {HttpClient} from "@angular/common/http";
import {FileUpload} from "primeng/fileupload";

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

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.toggleTableHeaders();
    this.products = [
      new Product(1, "ITI X", "18.jpg", 10, new Date(), 1),
      new Product(2, "ITI Y", "18.jpg", 20, new Date(), 2),
      new Product(3, "AIET Z", "18.jpg", 30, new Date(), 3),
      new Product(4, "AIET A", "18.jpg", 40, new Date(), 4),
      new Product(5, "AIET B", "18.jpg", 50, new Date(), 5),
    ];

  }

  onRateClicked(rateValue: number, id: number) {
    let selectedProduct = this.products.find(product => product.id === id);
    if (selectedProduct)
      selectedProduct.rate = rateValue;
  }

  showDialog() {
    this.display = true;
  }

  edit(id: number) {

    console.log(this.products.find(product => product.id === id));
    let selectedProductIndex = this.products.findIndex(product => product.id === id);
    let refreshedDataSource = [...this.products];

    refreshedDataSource.splice(selectedProductIndex, 1, new Product(this.selectedProduct.id, this.selectedProduct.name,
      this.selectedProduct.image, this.selectedProduct.price
      , this.selectedProduct.date, this.selectedProduct.rate));

    this.products = refreshedDataSource;
    this.displayModal = false;

    this.refreshUi(this.selectedProduct);
  }


  delete(id: number) {
    const refreshedDataSource = [...this.products];
    refreshedDataSource.splice(refreshedDataSource.findIndex(product => product.id === id), 1);
    this.products = refreshedDataSource;
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
      const refreshedDataSource = [...this.products];
      refreshedDataSource.push(new Product(this.tempProduct.id, this.tempProduct.name, this.tempProduct.image, this.tempProduct.price, this.tempProduct.date, this.tempProduct.rate));
      this.products = refreshedDataSource;
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
