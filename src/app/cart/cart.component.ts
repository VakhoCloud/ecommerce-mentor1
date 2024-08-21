import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card'; 
import { MatDividerModule } from '@angular/material/divider'; 
import { CartServiceService } from '../cart-service.service';



@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MatCardModule, MatDividerModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',

})
export class CartComponent implements OnInit{  
  @Output() close = new EventEmitter<boolean>();
  productList: any[] = []

  constructor(private cartService: CartServiceService) {}

  ngOnInit(): void {    
    this.productList = this.cartService.getProducts();

    this.cartService.cartProducts.subscribe(p => { 
      this.productList = p;


    })
  }

  removeFromCart(index: number) { 
    console.log(this.cartService.getProducts());
    this.cartService.removeProductFromCart(index);
    this.cartService.cartProducts.subscribe(p => { 
      this.productList = p;
    })
  }



}
