import { Injectable } from '@angular/core';
import { Place } from './places.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place('p1',
      'Manhattan Mansion',
      'In the heart of New York City',
      'https://img.thedailybeast.com/image/upload/v1541016891/181031-carrier-payne-tease_tk805s.jpg',
      149.99
    ),
    new Place('p2',
      'L\'Amour Toujours',
      'A romantic place in Paris.',
      'https://cf.bstatic.com/images/hotel/max1024x768/195/195277348.jpg',
      189.99
    ),
    new Place('p3',
      'The Foggy Palace',
      'Not your average city trip!',
      'https://live.staticflickr.com/3231/2371756848_1775883477_z.jpg',
      99.99
    )
  ];

  get places()
  {
    return [...this._places];
  }

  constructor() { }

  
  getPlace(id: string)
  {
    return {...this._places.find(p => p.id === id)};
  }
}
