import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

interface Product {
  id: string;
  product: string;
  category: string;
  fullPrice: string;
  salePrice: string;
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
    { id: '1', product: 'Post-it', category: 'First Aid', fullPrice: '99.28', salePrice: '31.56', availability: 'Yes', supplier: 'Tata Chemicals', discount: '32%' },
    { id: '2', product: 'Scotch-brite', category: 'Household', fullPrice: '49.35', salePrice: '42.54', availability: 'Yes', supplier: 'Reliance', discount: '25%' },
    { id: '3', product: 'Command', category: 'Household', fullPrice: '44.3', salePrice: '36.36', availability: 'No', supplier: 'Adani Healthcare', discount: '35%' },
  ];
  columns = [
    { field: 'id', header: 'Id'},
    { field: 'product', header: 'Product' },
    { field: 'category', header: 'Category' },
    { field: 'fullPrice', header: 'FullPrice'},
    { field: 'salePrice', header: 'SalePrice' },
    { field: 'availability', header: 'Availability' },
    { field: 'supplier', header: 'Supplier' },
    { field: 'discount', header: 'Discount'},
  ];
  editableRowIndex: number | null = null;
  sortState: { field: string; order: 'asc' | 'desc' | null } = { field: '', order: null };


  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }


  sortColumn(field: string) {
    if (this.editableRowIndex != null){
      this.messageService.add({'severity': 'warn', 'summary': 'Warning', 'detail': 'Please save the row to enable sorting feature.'});
      return;
    }
    const fieldKey = field as keyof Product;
  
    if (this.sortState.field === fieldKey) {
      this.sortState.order = this.sortState.order === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortState.field = fieldKey;
      this.sortState.order = 'asc';
    }
    this.products.sort((a, b) => {
      const valA = a[fieldKey];
      const valB = b[fieldKey];
  
      let comparison = 0;
      
      if (fieldKey === 'fullPrice' || fieldKey === 'salePrice') {
        const numValA = parseFloat(valA);
        const numValB = parseFloat(valB);
        comparison = numValA - numValB;
      }
      else if (fieldKey === 'discount') {
        const numericValA = parseFloat(valA.replace('%', ''));
        const numericValB = parseFloat(valB.replace('%', ''));
        comparison = numericValA - numericValB;
      }
      else if (typeof valA === 'string' && typeof valB === 'string') {
        comparison = valA.localeCompare(valB);
      }
      return this.sortState.order === 'asc' ? comparison : -comparison;
    });
  }
  
  

  getSortIcon(field: string): 'asc' | 'desc' | null {
    return this.sortState.field === field ? this.sortState.order : null;
  }


  addRow() {
    if (this.editableRowIndex != null){
      this.messageService.add({'severity': 'warn', 'summary': 'Warning', 'detail': 'Please save the current row to enable adding new row.'});
      return;
    }
    const newRow: Product = {
      id: '',
      product: '',
      category: '',
      fullPrice: '',
      salePrice: '',
      availability: '',
      supplier: '',
      discount: '',
    };
    this.products = [newRow, ...this.products];
    this.editableRowIndex = 0; 
  }

  enableRowEdit(index: number) {
    if (this.editableRowIndex != null){
      this.messageService.add({'severity': 'warn', 'summary': 'Warning', 'detail': 'Can not edit another since a row is already in edit mode.'});
      return;
    }
    this.editableRowIndex = index;
  }

  saveRowEdit(index: number) {
    const product = this.products[index];
    if (!product.product || !product.category || !product.fullPrice || !product.salePrice || !product.id || !product.discount || !product.availability || !product.supplier) {
      alert('Please fill in all the required fields with valid data.');
      return;
    }
    if (product.discount.endsWith('%') && parseFloat(product.discount.slice(0,-1)) > 100){
      alert('Discount cannot be greater than 100%');
      return;
    }
    else if(!product.discount.endsWith('%') && parseFloat(product.discount) > 100) {
      alert('Discount cannot be greater than 100%');
      return;
    }
    if (!product.discount.endsWith('%')){
      product.discount += '%';
    }
    this.editableRowIndex = null;
  }


  isRowEditable(index: number): boolean {
    return this.editableRowIndex === index;
  }


  deleteRow(index: number) {
    if (this.editableRowIndex !== index && this.editableRowIndex != null){
      this.messageService.add({'severity': 'warn', 'summary': 'Warning', 'detail': 'Please can not delete a row since a row is in edit mode. '});
      return;
    }
    this.products.splice(index, 1);
    if (this.editableRowIndex === index) {
      this.editableRowIndex = null;
    }
  }

}
