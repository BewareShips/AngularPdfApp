import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-chart',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class ChartComponent implements OnInit {

  // public total = 0;
  // public cashBack = 0;
  //  object:any = {}

  constructor(public listService:ListService) { 
    // this.object = JSON.parse(localStorage?.getItem("object") || '{}');
  }

  ngOnInit(): void {

     

    // this.total = this?.object?.customerCreditPurchase.reduce((prev:any,current:any)=>{
    //   prev + current.amount_spent
    // })

    // this.cashBack = this?.object?.customerCreditPurchase.reduce((prev:any,current:any)=>{
    //   prev + current.rewards_points
    // })
  }

}
