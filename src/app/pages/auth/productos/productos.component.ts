import { Component, OnInit } from '@angular/core'; // Añadido OnInit
import { ProductsService } from './products.service'; 
import { FormsModule } from '@angular/forms';
import { Product } from './product.model';
import { CommonModule } from '@angular/common';
import {TableModule} from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import {ColorPicker} from 'primeng/colorpicker';
import { KnobModule } from 'primeng/knob';
import { RatingModule } from 'primeng/rating';
import { DatePickerModule } from 'primeng/datepicker';
import { SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
  selector: 'app-productos',
  imports: [FormsModule,CommonModule, TableModule, 
    DialogModule,InputTextModule, CheckboxModule,
    ButtonModule, FloatLabelModule, ColorPicker, 
    KnobModule, RatingModule, DatePickerModule, SelectModule,
    InputNumberModule, RadioButtonModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent implements OnInit { // Implementado OnInit
 showCreateDialog = false;
 product: Product = {
    name: '',
    price: 0,
    quantity: 0,
    total: 0,
    state: true,
    rating : 0
  };

  productList: Product[] = [];
  color: string = '#000000';
  Value: number = 50;
  datavalue: Date = new Date();
  productos: any []|undefined;
  selectedproductos: any | undefined;
  ingredient!: string;
  productosDisponibles: Product[]=[];
  tipo: any;

  constructor(private productsService: ProductsService) {}
  
  ngOnInit() { // Quitamos async
    this.loadProductos();
    this.productos = [
      { name: 'Carnes'},
      { name: 'Vegetales'},
      { name: 'Frutas'},
      { name: 'Legumbres'},
      { name: 'Lácteos'},  
      { name: 'Bebidas'},
      { name: 'Otros'}
    ];
  }

  create() { // Quitamos async
    this.productsService.create(this.product).subscribe({ // Usamos subscribe
      next: () => {
        this.product = {
          name: '',
          price: 0,
          quantity: 0,
          total: 0,
          state: true,
          rating: 0
        };
        this.showCreateDialog = false;
        this.loadProductos(); // Recargamos la lista
      },
      error: (error) => console.error('Error al crear el producto:', error)
    });
  }

 loadProductos() {
  console.log('loadProductos llamado');
  this.productsService.getProducts().subscribe({
    next: (products) => {
      this.productList = products;
      console.log('Productos cargados:', this.productList);
    },
    error: (err) => console.error('Error cargando productos', err)
  });
 }

 updateProduct(product: Product) { // Quitamos async
  if (!product.id) return;

  this.productsService.updateProduct(product.id, {
    name: product.name,
    price: product.price,
    quantity: product.quantity,
    total: product.price * product.quantity,
    state: product.state,
    rating: product.rating,
  }).subscribe({ // Usamos subscribe
    next: () => console.log('Producto actualizado'),
    error: (err) => console.error('Error actualizando producto', err)
  });
 }

  deleteProduct(docId: string) { // Quitamos async
    this.productsService.deleteProduct(docId).subscribe({ // Usamos subscribe
      next: () => {
        console.log('Eliminado');
        this.loadProductos(); // Recargamos la lista
      },
      error: (err) => console.error('Error eliminando producto', err)
    });
  }
}