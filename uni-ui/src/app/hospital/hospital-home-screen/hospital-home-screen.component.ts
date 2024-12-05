import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

interface Product {
  id: number;
  product: string;
  category: string;
  fullPrice: number;
  salePrice: number;
  availability: string;
  supplier: string;
  discount: string;
}


@Component({
  selector: 'app-hospital-home-screen',
  templateUrl: './hospital-home-screen.component.html',
  styleUrls: ['./hospital-home-screen.component.scss']
})
export class HospitalHomeScreenComponent implements OnInit {

  products: Product[] = [
    { id: 1, product: 'Post-it', category: 'Household', fullPrice: 99.28, salePrice: 31.56, availability: 'true', supplier: '3M', discount: '32%' },
    { id: 2, product: 'Scotch-brite', category: 'Household', fullPrice: 49.35, salePrice: 42.54, availability: 'true', supplier: '3M', discount: '86%' },
    { id: 3, product: 'Command', category: 'Household', fullPrice: 44.3, salePrice: 36.36, availability: 'true', supplier: '3M', discount: '82%' },
  ];
  columns = [
    { field: 'id', header: 'Id', width: '50px' },
    { field: 'product', header: 'Product', width: '150px' },
    { field: 'category', header: 'Category', width: '150px' },
    { field: 'fullPrice', header: 'FullPrice', width: '120px' },
    { field: 'salePrice', header: 'SalePrice', width: '120px' },
    { field: 'availability', header: 'Availability', width: '120px' },
    { field: 'supplier', header: 'Supplier', width: '120px' },
    { field: 'discount', header: 'Discount', width: '100px' },
  ];

  sortField: string = '';
  sortOrder: string = '';

  isSorted(field: string, order: string): boolean {
    return this.sortField === field && this.sortOrder === order;
  }

  onSortChange(event: any) {
    this.sortField = event.field;
    this.sortOrder = event.order === 1 ? 'asc' : 'desc';
  }

  // columns = [
  //   { field: 'id', header: 'Id', width: '5%' },
  //   { field: 'product', header: 'Product', width: '15%' },
  //   { field: 'category', header: 'Category', width: '15%' },
  //   { field: 'fullPrice', header: 'FullPrice', width: '12%' },
  //   { field: 'salePrice', header: 'SalePrice', width: '12%' },
  //   { field: 'availability', header: 'Availability', width: '12%' },
  //   { field: 'supplier', header: 'Supplier', width: '12%' },
  //   { field: 'discount', header: 'Discount', width: '12%' },
  // ];


  editableRowIndex: number | null = null;

  addRow() {
    const newRow: Product = {
      id: this.products.length + 1,
      product: '',
      category: '',
      fullPrice: 0,
      salePrice: 0,
      availability: '',
      supplier: '',
      discount: '',
    };
    this.products = [newRow, ...this.products];
    this.editableRowIndex = 0; // Make the new row editable
  }

  enableRowEdit(index: number) {
    this.editableRowIndex = index;
  }

  saveRowEdit(index: number) {
    const product = this.products[index];

    // Check if the product has valid data
    if (!product.product || !product.category || !product.fullPrice || !product.salePrice) {
      alert('Please fill in all the required fields with valid data.');
      return;
    }

    // Optional: further custom validations if necessary
    this.editableRowIndex = null; // Disable editing mode
  }


  isRowEditable(index: number): boolean {
    return this.editableRowIndex === index;
  }

  // onFieldChange(rowIndex: number) {
  //   const row = this.products[rowIndex];
  //   const allFieldsFilled = Object.values(row).every(value => value !== '' && value !== null);

  //   if (allFieldsFilled) {
  //     this.editableRowIndex = null; // Stop editing once the row is complete
  //     this.saveRowEdit(rowIndex);
  //   }
  // }

  deleteRow(index: number) {
    this.products.splice(index, 1);
    if (this.editableRowIndex === index) {
      this.editableRowIndex = null;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
