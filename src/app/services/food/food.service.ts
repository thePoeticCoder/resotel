import { Injectable } from '@angular/core';
import { Foods } from './food';
import { Tag } from './tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Foods[]{
    return[
    
      {
        id:1,
        name:'Egg-Fry with Garlic bread',
        price:50,
        favourite:true,
        star:3.5,
        tags:['fastfood','freid','soup'],
        imageurl:'assets/a1.jpeg',
        cookTime:35-40,
        origins:['New-York','Paris'],
      },
      
      {
        id:2,
        name:'Pizza-King',
        price:100,
        favourite:true,
        star:5,
        tags:['fastfood','pizza'],
        imageurl:'assets/a2.jpeg',
        cookTime:15-20,
        origins:['India','Paris']
      },
      
      {
        id:3,
        name:'Noodles-Love',
        price:30,
        favourite:true,
        star:4,
        tags:['fastfood','Frie','Noodles'],
        imageurl:'assets/a3.webp',
        cookTime:15-20,
        origins:['Belgium','China'],
      },
      {
      id:4,
        name:'delcious-breakfast',
        price:10,
        favourite:true,
        star:4,
        tags:['fastfood,Frie','lunch'],
        imageurl:'assets/a4.jpg',
        cookTime:15-20,
        origins:['Belgium','Paris','Indian'],
      },
      
    
      {
        id:5,
        name:'Pasta-Hungry',
        price:40,
       favourite:true,
        star:2,
        tags:['fastfood,frie','soup'],
        imageurl:'assets/a5.jpeg',
        cookTime:15-20,
        origins:['Italy','Paris']
      },
      
      
      
      {
        id:6,
        name:'Garlic Bread -Spinach',
        price:15,
        favourite:false,
        star:2,
        tags:['breakfast'],
        imageurl:'assets/a6.jpeg',
        cookTime:15-20,
        origins:['Indian','Turkey']
      },
      
      
   
      {
        id:7,
        name:'sapheti-soup',
        price:19,
       favourite:true,
        star:2,
        tags:['fastfood,frie'],
        imageurl:'assets/a7.jpeg',
        cookTime:15-20,
        origins:['Japan','India']
      },
      
      {
        id:8,
        name:'Choco-Pie-Jelly',
        price:50,
       favourite:true,
        star:5,
        tags:['Dessert,Frie'],
        imageurl:'assets/a8.jpg',
        cookTime:15-20,
        origins:['London','Paris','Torronto'],
      },
      {
        id:9,
        name:'Crispy-Kawab',
        price:70,
        favourite:false,
        star:4,
        tags:['fastfood,frie'],
        imageurl:'assets/a9.jpg',
        cookTime:15-20,
        origins:['belgium','paris']
      },
      {
        id:10,
        name:'BakkarWadi-Jalwa',
        price:10,
       favourite:false,
        star:4,
        tags:['fastfood,frie'],
        imageurl:'assets/a10.jpg',
        cookTime:15-20,
        origins:['India']
      },
    ];
  }
  getAllFoodsByTag(tag:string):Foods[]{
    if(tag=='all')
    return this.getAll()
    else {
      return this.getAll().filter(food=>food.tags?.includes(tag))
    }

  }
  getAllTag():Tag[]{
    return [
      {name:'all',count:14},
      {name:'FastFood',count:4},
      {name:'Pizza',count:2},
      {name:'Lunch',count:3},
      {name:'SlowFood',count:2},
      {name:'Hamburger',count:1},
      {name:'Frie',count:5},
      {name:'soup',count:1}

    ];
  }
  getFoodById(id :number):Foods{
return this.getAll().find(food=>food.id==id)!;
  }
}
