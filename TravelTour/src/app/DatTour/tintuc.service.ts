import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import {ITintuc} from "./tintuc";

@Injectable({
  providedIn: 'root'
})
export class TintucService {
  private tintuc: ITintuc[] = [
    {
      id: '1',
      name: 'Du lịch Hà Nội - Đà Lạt - Hà Nội 3 ngày 2 đêm 1',
      imageUrl: 'assets/img/img.png',
      conten_head:'Phan Thiết là một thành phố thuộc tỉnh Bình Thuận, nằm trên quốc lộ 1A cách TP Hồ Chí Minh 183 km về hướng Đông Bắc. Gần thành phố, tiện lợi cho việc di chuyển và không quá tốn kém, Phan Thiết là sự lựa chọn quá ổn cho những chuyến du lịch ngắn cuối tuần xả stress...',
      conten_center:'nội dung 1'
    },
    {
      id: '2',
      name: 'Du lịch Hà Nội - Đà Lạt - Hà Nội 3 ngày 2 đêm 2',
      imageUrl: 'assets/img/img_1.png',
      conten_head:'Phan Thiết là một thành phố thuộc tỉnh Bình Thuận, nằm trên quốc lộ 1A cách TP Hồ Chí Minh 183 km về hướng Đông Bắc. Gần thành phố, tiện lợi cho việc di chuyển và không quá tốn kém, Phan Thiết là sự lựa chọn quá ổn cho những chuyến du lịch ngắn cuối tuần xả stress...',
      conten_center:'nội dung 1'
    },
    {
      id: '3',
      name: 'Du lịch Hà Nội - Đà Lạt - Hà Nội 3 ngày 2 đêm 3',
      imageUrl: 'assets/img/dl.jpg',
      conten_head:'Phan Thiết là một thành phố thuộc tỉnh Bình Thuận, nằm trên quốc lộ 1A cách TP Hồ Chí Minh 183 km về hướng Đông Bắc. Gần thành phố, tiện lợi cho việc di chuyển và không quá tốn kém, Phan Thiết là sự lựa chọn quá ổn cho những chuyến du lịch ngắn cuối tuần xả stress...',
      conten_center:'nội dung 1'
    },
    {
      id: '4',
      name: 'Du lịch Hà Nội - Phú quốc - Hà Nội 3 ngày 2 đêm 4',
      imageUrl: 'assets/img/pq.jpg',
      conten_head:'Phan Thiết là một thành phố thuộc tỉnh Bình Thuận, nằm trên quốc lộ 1A cách TP Hồ Chí Minh 183 km về hướng Đông Bắc. Gần thành phố, tiện lợi cho việc di chuyển và không quá tốn kém, Phan Thiết là sự lựa chọn quá ổn cho những chuyến du lịch ngắn cuối tuần xả stress...',
      conten_center:'nội dung 1'
    },
    {
      id: '5',
      name: 'Du lịch Hà Nội - Đà Lạt - Hà Nội 3 ngày 2 đêm 5',
      imageUrl: 'assets/img/img.png',
      conten_head:'Phan Thiết là một thành phố thuộc tỉnh Bình Thuận, nằm trên quốc lộ 1A cách TP Hồ Chí Minh 183 km về hướng Đông Bắc. Gần thành phố, tiện lợi cho việc di chuyển và không quá tốn kém, Phan Thiết là sự lựa chọn quá ổn cho những chuyến du lịch ngắn cuối tuần xả stress...',
      conten_center:'nội dung 1'
    },
    {
      id: '6',
      name: 'Du lịch Hà Nội - Đà Lạt - Hà Nội 3 ngày 2 đêm 6',
      imageUrl: 'assets/img/img_1.png',
      conten_head:'Phan Thiết là một thành phố thuộc tỉnh Bình Thuận, nằm trên quốc lộ 1A cách TP Hồ Chí Minh 183 km về hướng Đông Bắc. Gần thành phố, tiện lợi cho việc di chuyển và không quá tốn kém, Phan Thiết là sự lựa chọn quá ổn cho những chuyến du lịch ngắn cuối tuần xả stress...',
      conten_center:'nội dung 1'
    },
    {
      id: '7',
      name: 'Du lịch Hà Nội - Đà Lạt - Hà Nội 3 ngày 2 đêm 7',
      imageUrl: 'assets/img/dl2.jpg',
      conten_head:'Phan Thiết là một thành phố thuộc tỉnh Bình Thuận, nằm trên quốc lộ 1A cách TP Hồ Chí Minh 183 km về hướng Đông Bắc. Gần thành phố, tiện lợi cho việc di chuyển và không quá tốn kém, Phan Thiết là sự lựa chọn quá ổn cho những chuyến du lịch ngắn cuối tuần xả stress...',
      conten_center:'nội dung 1'
    },
    {
      id: '8',
      name: 'Du lịch Hà Nội - Đà Lạt - Hà Nội 3 ngày 2 đêm 8',
      imageUrl: 'assets/img/img_1.png',
      conten_head:'Phan Thiết là một thành phố thuộc tỉnh Bình Thuận, nằm trên quốc lộ 1A cách TP Hồ Chí Minh 183 km về hướng Đông Bắc. Gần thành phố, tiện lợi cho việc di chuyển và không quá tốn kém, Phan Thiết là sự lựa chọn quá ổn cho những chuyến du lịch ngắn cuối tuần xả stress...',
      conten_center:'nội dung 1'
    },
    {
      id: '9',
      name: 'Du lịch Hà Nội - Đà Lạt - Hà Nội 3 ngày 2 đêm 9',
      imageUrl: 'assets/img/img_1.png',
      conten_head:'Phan Thiết là một thành phố thuộc tỉnh Bình Thuận, nằm trên quốc lộ 1A cách TP Hồ Chí Minh 183 km về hướng Đông Bắc. Gần thành phố, tiện lợi cho việc di chuyển và không quá tốn kém, Phan Thiết là sự lựa chọn quá ổn cho những chuyến du lịch ngắn cuối tuần xả stress...',
      conten_center:'nội dung 1'
    },
  ];

  constructor() {
  }

  getTintucList(): Observable<ITintuc[]> {
    return of(this.tintuc).pipe(delay(50));
  }

  getTintucOneList(): Observable<ITintuc[]> {
      return of(this.tintuc).pipe(delay(50));

  }

  findTintucById(id: string): Observable<ITintuc> {
    const product = this.tintuc.find(p => p.id === id);
    if (product) {
      return of(product).pipe(delay(50));
    } else {
      return throwError(new Error('404 Not Found'));
    }
  }
  // findTintucById1(a:string[]): Observable<ITintuc> {
  //   let product;
  //   for (let i in a) {
  //      product = this.tintuc.find(p => p.id === a[i]);
  //   }
  //   if (product) {
  //     return of(product).pipe(delay(50));
  //   } else {
  //     return throwError(new Error('404 Not Found'));
  //   }
  // }
}
