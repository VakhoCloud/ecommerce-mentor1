import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list'; 
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import { FormsModule } from '@angular/forms';
import { LightBoxComponent } from './light-box/light-box.component';
import { CartComponent } from './cart/cart.component';
import { CartServiceService } from './cart-service.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatSidenavModule, MatToolbarModule, MatListModule, FormsModule, MatIconModule, MatButtonModule, MatBadgeModule, LightBoxComponent, CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'ecommerce-mentor';

  
  opened = false;
  openLightBox = false;
  openCartBox = false;
  
  quantity = 0;
  
  cartValue: number = 0;
  
  imgList = [
    '../assets/images/image-product-1.JPG',
    '../assets/images/image-product-2.JPG',
    '../assets/images/image-product-3.JPG',
    '../assets/images/image-product-4.JPG'
  ]
  
  currentImage  = this.imgList[0];
  
  constructor(private cartService: CartServiceService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
      this.cartService.cartProducts.subscribe(p => { 
        this.cartValue = p.length;
      })
  }

  toggleNext() { 
    if (this.imgList.indexOf(this.currentImage) + 2 > this.imgList.length ) {
      this.currentImage = this.imgList[0];
    }else { 
      this.currentImage = this.imgList[this.imgList.indexOf(this.currentImage) + 1];
    }
  }

  togglePrevious() { 
    if (this.imgList.indexOf(this.currentImage) - 1 < 0 ) {
      this.currentImage = this.imgList[this.imgList.length - 1];
    }else { 
      this.currentImage = this.imgList[this.imgList.indexOf(this.currentImage) - 1];
    }
  }

  decrease() { 
    this.quantity -= 1;
  }

  increase() { 
    this.quantity += 1;
  }

  onHandleClose(){
    this.openLightBox = false;
  }

  openImage() {
    this.openLightBox = true
  }

  onAddProduct() { 
    this.cartService.addProductToCart(this.quantity);
    this.cdr.detectChanges();
  }

  onImage(index: number) {
    this.currentImage = this.imgList[index]
  }

  onOpenCart() {
    this.openCartBox = !this.openCartBox;
  }
}
