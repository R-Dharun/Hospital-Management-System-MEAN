import { Eyewear } from "./Eyewear";

export class CartItem{
  constructor(public eyewear:Eyewear){ }
  quantity:number = 1 ;
  price: number = this.eyewear.price;
}
