import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../services/food/food';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { ActivatedRoute, Router } from '@angular/router';
import { partitionArray } from '@angular/compiler/src/util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods:Foods[]=[];
  constructor(private fs:FoodService ,
               private route:ActivatedRoute,
               private router:Router   ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      if(params['searchItem'])
      this.foods=this.fs.getAll().filter(food=>food.name.toLowerCase().includes(params['searchItem'].toLowerCase()))
     else if(params['tag']){
          this.foods=this.fs.getAllFoodsByTag(params['tag'])
     }
      else {
        this.foods=this.fs.getAll();
      }
    })
   

  }
  search():void{

  }

}
