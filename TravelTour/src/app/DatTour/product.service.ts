import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { IProduct } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: IProduct[] = [
    {
      id: '1',
      name: 'Du lịch Hà Nội - Đà Lạt - Hà Nội 3 ngày 2 đêm 1',
      pricel: 15.99,
      pricen: 10.99,
      quantityl: 1,
      quantityn: 1,
      imageUrl: 'assets/img/img.png',
      time: '3N2Đ',
      transport: 'Máy bay',
      content: {
        ctt: "Cao nguyên Lâm Đồng với khí hậu quanh năm mát mẻ, không khí trong lành, phong cảnh thiên nhiên thơ mộng với đồi thông, suối, hồ, thác và vườn hoa.Đà Lạt - thủ phủ của Lâm Đồng, nổi tiếng là thành phố nghỉ mát bậc nhất của người Pháp ở Đông Dương, được mệnh danh là Thành phố Hoa, Thành phố mùa Xuân.",
        img1: '../../../../assets/img/dl.jpg',
        img2: '../../../../assets/img/dl2.jpg',
        dnb:"bbbbbbbbbb",
        dk:"gggggggg",
      }
    },
    {
      id: '2',
      name: 'Du lịch Hà Nội - Đà Lạt - Hà Nội 3 ngày 2 đêm 2',
      pricel: 16.99,
      pricen: 11.99,
      quantityl: 1,
      quantityn: 1,
      imageUrl: 'assets/img/img.png',
      time: '3N2Đ',
      transport: 'Máy bay',
      content: {
        ctt: "aaaaaaaa",
        img1: '../../../../assets/img/dl.jpg',
        img2: '../../../../assets/img/dl2.jpg',
        dnb:"bbbbbbbbbb",
        dk:"gggggggg",
      }
    },
    {
      id: '3',
      name: 'Du lịch Hà Nội - Đà Lạt - Hà Nội 3 ngày 2 đêm 3',
      pricel: 17.99,
      pricen: 12.99,
      quantityl: 1,
      quantityn: 1,
      imageUrl: 'assets/img/img.png',
      time: '3N2Đ',
      transport: 'Máy bay',
      content: {
        ctt: "aaaaaaaa",
        img1: '../../../../assets/img/dl.jpg',
        img2: '../../../../assets/img/dl2.jpg',
        dnb:"bbbbbbbbbb",
        dk:"gggggggg",
      }
    },
    {
      id: '4',
      name: 'Du lịch Hà Nội - Đà Lạt - Hà Nội 3 ngày 2 đêm 4',
      pricel: 18.99,
      pricen: 13.99,
      quantityl: 1,
      quantityn: 1,
      imageUrl: 'assets/img/img.png',
      time: '3N2Đ',
      transport: 'Máy bay',
      content: {
        ctt: "aaaaaaaa",
        img1: '../../../../assets/img/dl.jpg',
        img2: '../../../../assets/img/dl2.jpg',
        dnb:"bbbbbbbbbb",
        dk:"gggggggg",
      }
    },
    {
      id: '5',
      name: 'Du lịch Hà Nội - Đà Lạt - Hà Nội 3 ngày 2 đêm 5',
      pricel: 19.99,
      pricen: 14.99,
      quantityl: 1,
      quantityn: 1,
      imageUrl: 'assets/img/img.png',
      time: '3N2Đ',
      transport: 'Máy bay',
      content: {
        ctt: "aaaaaaaa",
        img1: '../../../../assets/img/dl.jpg',
        img2: '../../../../assets/img/dl2.jpg',
        dnb:"bbbbbbbbbb",
        dk:"gggggggg",
      }
    },
    {
      id: '6',
      name: 'Du lịch Hà Nội - Đà Lạt - Hà Nội 3 ngày 2 đêm 6',
      pricel: 20.99,
      pricen: 15.99,
      quantityl: 1,
      quantityn: 1,
      imageUrl: 'assets/img/img.png',
      time: '3N2Đ',
      transport: 'Máy bay',
      content: {
        ctt: "aaaaaaaa",
        img1: '../../../../assets/img/dl.jpg',
        img2: '../../../../assets/img/dl2.jpg',
        dnb:"bbbbbbbbbb",
        dk:"gggggggg",
      }
    },
    {
      id: '7',
      name: 'Du lịch Hà Nội - Đà Lạt - Hà Nội 3 ngày 2 đêm 7',
      pricel: 21.99,
      pricen: 16.99,
      quantityl: 1,
      quantityn: 1,
      imageUrl: 'assets/img/img.png',
      time: '3N2Đ',
      transport: 'Máy bay',
      content: {
        ctt: "aaaaaaaa",
        img1: '../../../../assets/img/dl.jpg',
        img2: '../../../../assets/img/dl2.jpg',
        dnb:"bbbbbbbbbb",
        dk:"gggggggg",
      }

    },
    {
      id: '8',
      name: 'Du lịch Hà Nội - Đà Lạt - Hà Nội 3 ngày 2 đêm 8',
      pricel: 22.99,
      pricen: 17.99,
      quantityl: 1,
      quantityn: 1,
      imageUrl: 'assets/img/img.png',
      time: '3N2Đ',
      transport: 'Máy bay',
      content: {
        ctt: "aaaaaaaa",
        img1: '../../../../assets/img/dl.jpg',
        img2: '../../../../assets/img/dl2.jpg',
        dnb:"bbbbbbbbbb",
        dk:"gggggggg",
      }
    },
    {
      id: '9',
      name: 'Du lịch Hà Nội - Đà Lạt - Hà Nội 3 ngày 2 đêm 7',
      pricel: 21.99,
      pricen: 16.99,
      quantityl: 1,
      quantityn: 1,
      imageUrl: 'assets/img/img.png',
      time: '3N2Đ',
      transport: 'Máy bay',
      content: {
        ctt: "aaaaaaaa",
        img1: '../../../../assets/img/dl.jpg',
        img2: '../../../../assets/img/dl2.jpg',
        dnb:"bbbbbbbbbb",
        dk:"gggggggg",
      }

    },
    {
      id: '10',
      name: 'Du lịch Hà Nội - Đà Lạt - Hà Nội 3 ngày 2 đêm 7',
      pricel: 21.99,
      pricen: 16.99,
      quantityl: 1,
      quantityn: 1,
      imageUrl: 'assets/img/img.png',
      time: '3N2Đ',
      transport: 'Máy bay',
      content: {
        ctt: "aaaaaaaa",
        img1: '../../../../assets/img/dl.jpg',
        img2: '../../../../assets/img/dl2.jpg',
        dnb:"bbbbbbbbbb",
        dk:"gggggggg",
      }

    },
    {
      id: '11',
      name: 'Du lịch Hà Nội - Đà Lạt - Hà Nội 3 ngày 2 đêm 7',
      pricel: 21.99,
      pricen: 16.99,
      quantityl: 1,
      quantityn: 1,
      imageUrl: 'assets/img/img.png',
      time: '3N2Đ',
      transport: 'Máy bay',
      content: {
        ctt: "aaaaaaaa",
        img1: '../../../../assets/img/dl.jpg',
        img2: '../../../../assets/img/dl2.jpg',
        dnb:"bbbbbbbbbb",
        dk:"gggggggg",
      }

    },
    {
      id: '12',
      name: 'Du lịch Hà Nội - Đà Lạt - Hà Nội 3 ngày 2 đêm 7',
      pricel: 21.99,
      pricen: 16.99,
      quantityl: 1,
      quantityn: 1,
      imageUrl: 'assets/img/img.png',
      time: '3N2Đ',
      transport: 'Máy bay',
      content: {
        ctt: "aaaaaaaa",
        img1: '../../../../assets/img/dl.jpg',
        img2: '../../../../assets/img/dl2.jpg',
        dnb:"bbbbbbbbbb",
        dk:"gggggggg",
      }

    }
    ,
    {
      id: '13',
      name: 'Du lịch Hà Nội - Đà Lạt - Hà Nội 3 ngày 2 đêm 7',
      pricel: 21.99,
      pricen: 16.99,
      quantityl: 1,
      quantityn: 1,
      imageUrl: 'assets/img/img.png',
      time: '3N2Đ',
      transport: 'Máy bay',
      content: {
        ctt: "aaaaaaaa",
        img1: '../../../../assets/img/dl.jpg',
        img2: '../../../../assets/img/dl2.jpg',
        dnb:"bbbbbbbbbb",
        dk:"gggggggg",
      }

    }
  ];

  constructor() {
  }

  getProductList(): Observable<IProduct[]> {
    return of(this.products).pipe(delay(50));
  }

  findProductById(id: string): Observable<IProduct> {
    const product = this.products.find(p => p.id === id);
    if (product) {
      return of(product).pipe(delay(50));
    } else {
      return throwError(new Error('404 Not Found'));
    }
  }
  setquantity(id: string): Observable<IProduct> {
    const product = this.products.find(p => p.id === id);
    if (product) {
      product.quantityl++;
      return of(product).pipe(delay(50));
    } else {
      return throwError(new Error('404 Not Found'));
    }
  }
}
