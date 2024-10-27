import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  product:any;
  id:any;
  constructor(private cs:CartService,private rs:ActivatedRoute){}
  ngOnInit(){
    this.rs.params.subscribe((v)=>this.id=(v['id']))
    this.cs.getSpecificData(this.id).subscribe((res)=>{
      this.product=res;
     
    })
  }
  addCart(pro:any){
    this.cs.addToCart(pro)
  }
}
