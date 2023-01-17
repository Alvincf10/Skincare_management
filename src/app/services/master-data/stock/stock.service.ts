import { GlobalService } from './../../global.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(
    private gService: GlobalService
  ) { }

  getAll = (param: any) => {
    return this.gService.Get('stocks', param);
  }

  save = (stock: any) => {
    return this.gService.Post('stocks', stock); 
  }

  Update = (stock: any) => {
    return this.gService.Put(`stocks/${stock.id}`, stock);
  }

  Delete = (id: any) => {
    return this.gService.Delete(`stocks`, id);
  }
  
}
