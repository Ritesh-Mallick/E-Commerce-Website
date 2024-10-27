import { Component,OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  cartItemCount=0;
  constructor(private cs:CartService){}
  ngOnInit(){
    this.cs.cartItemObs.subscribe((items:any)=>{
      this.cartItemCount=items.length
    })
  }
}
