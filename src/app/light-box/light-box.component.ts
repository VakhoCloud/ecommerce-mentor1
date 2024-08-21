import { trigger, transition, style, query, group, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs'
@Component({
  selector: 'app-light-box',
  standalone: true,
  imports: [MatTabsModule, CommonModule],
  templateUrl: './light-box.component.html',
  styleUrl: './light-box.component.css',
 
})
export class LightBoxComponent {
  @Output() close = new EventEmitter<boolean>();
  
  quantity = 0;
  imgList = [
    '/ecommerce-mentor/assets/images/image-product-1.JPG',
    '/ecommerce-mentor/assets/images/image-product-2.JPG',
    '/ecommerce-mentor/assets/images/image-product-3.JPG',
    '/ecommerce-mentor/assets/images/image-product-4.JPG'
  ]
  currentImage = this.imgList[0];
  
  
  
  onClose() {
    this.close.emit(false);
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

  onImage(index: number) {
    this.currentImage = this.imgList[index]
  }

}
