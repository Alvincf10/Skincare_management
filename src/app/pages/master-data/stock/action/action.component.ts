import { sweetAlert } from 'src/app/@core/helper';
import { RulesSweetAlert } from 'src/app/@core/model/global-swal-model';
import { StockModel } from './../../../../@core/model/stock.model';
import { StockService } from 'src/app/services/master-data/stock/stock.service';
import { Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {
  stockData = new StockModel();

  constructor(
    public dialogRef: MatDialogRef<ActionComponent>,
    private stockService: StockService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data){
      this.stockData = data;
      console.log(data)
    }
   }

  ngOnInit(): void {
  }

  submitData = () => {
    let validation = false;
    let text = '';
    if (!this.stockData.quantityStock){
      validation = true;
      text = 'Stock harus diisi';
    }
    if (validation){
      const rulesAlert: RulesSweetAlert = {
        title: 'Failed',
        text,
        icon: 'error',
        showCancelButton: false
    };
      sweetAlert(rulesAlert);
      return;
    }
    const param: any = {
      quantityStock: this.stockData.quantityStock
    };
    if (this.stockData.idStock){
      param.id = this.stockData.idStock;
      this.stockService.Update(param).subscribe(
        data => {
          if(data){
            this.dialogRef.close('Mengubah data');
          }
        }
      );
    }else{
      this.stockService.save(param).subscribe(
        data => {
          if(data){
            this.dialogRef.close('Menambah data');
          }
        }
      );
    }
  }

}
