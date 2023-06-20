import { Eyewear } from './app/shared/models/Eyewear';
import { Tag } from './app/shared/models/Tag';
export const sampleEyewear:Eyewear[] = [
  {
    id:'1',
    name: 'Sand Dune Full Rim Square',
    price: 2700,
    favorite:true,
    stars:4.5,
    imageUrl:'assets/cg-1.jpg',
    tag:'Computer Glass',
    power:'0'
  },
  {
    id:'2',
    name: 'Blu Hustlr Grey Rim Bold',
    price: 2500,
    favorite:false,
    stars:4.7,
    imageUrl:'assets/cg-2.jpg',
    tag:'Computer Glass',
    power:'0'
  },
  {
    id:'3',
    name: " Blue Full Rim Rectangle Power Glass",
    price: 2700,
    favorite:true,
    stars:4.5,
    imageUrl:"assets/pg-1.jpg",
    tag:'Power Glass',
    power:'+1.5'
  },
  {
    id:'4',
    name:'Gunmetal Black Full Rim Round Glass',
    price: 1199,
    favorite:false,
    stars:4.9,
    imageUrl:'assets/pg-2.jpg',
    tag:'Power Glass',
    power:'+0.5',
  },
  {
    id:'5',
    name:'Black Full Rim Vincent Chase',
    price: 999,
    favorite:false,
    stars:5,
    imageUrl:'assets/sg-1.jpg',
    tag:'Sunglass',
    power:'0'
  },
  {
    id:'6',
    name:'Green Full Rim Vincent Chase',
    price: 999,
    favorite:false,
    stars:5,
    imageUrl:'assets/sg-2.jpg',
    tag:'Sunglass',
    power:'0'
  },
]

export const sampleTags:Tag[] = [
  {name:'Power Glass', count:2},
  {name:'Computer Glass', count:2},
  {name:'Sunglass', count:2}
]
