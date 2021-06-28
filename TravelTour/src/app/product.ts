interface Content {
  ctt:string;
  img1:string;
  img2:string;
  dnb:string;
  dk:string;
}

export interface IProduct {
  id: string;
  name: string;
  pricel: number;
  pricen:number;
  quantityl:number;
  quantityn:number;
  imageUrl: string;
  time:string;
  transport:string;
  content: Content;
}
