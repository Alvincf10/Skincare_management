import { RulesSweetAlert } from './../../../@core/model/global-swal-model';
import { sweetAlert } from 'src/app/@core/helper';
import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/app/services/master-data/stock/stock.service';
import { ActionComponent } from './action/action.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  size = 20
  stock: any;

  constructor(
    private stockService: StockService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData = () => {
    const param = {
      size: ''
    }
    this.stockService.getAll(param).subscribe(
      (resp) => {
        this.stock = resp
      }
     )
  }

  action = (stockData = null) => {
      const dialogRef = this.dialog.open(ActionComponent, {
        width : '500px',
        maxHeight: '100vh',
        data : stockData
      });
      dialogRef.afterClosed().subscribe(
        (result: any) => {
          if (result){
            const rulesAlert: RulesSweetAlert = {
              title: 'Berhasil',
              text: result,
              icon: 'success',
              showCancelButton: false
            };
            sweetAlert(rulesAlert);
            this.getAllData();
          }
        }
      );
  }

  deleteData = (id: number) => {
    this.stockService.Delete(id).subscribe(
      data => {
          console.log(data)
          const rulesAlert: RulesSweetAlert = {
            title: 'Terhapus!',
            text: 'Data berhasil dihapus',
            icon: 'success',
            showCancelButton: false
          };
  
          sweetAlert(rulesAlert);
          this.getAllData();
      }, () => {
        const rulesAlert: RulesSweetAlert = {
          title: 'Error!',
          text: 'Gagal menghapus data',
          icon: 'error',
          showCancelButton: false
        };

        sweetAlert(rulesAlert);
      }
    );
  }

  confirmDelete = (id: number) => {
    const rulesData: RulesSweetAlert = {
      title: 'Apakah anda yakin ingin menghapus data ini?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#00000',
      cancelButtonColor: '#00000',
      confirmButtonText: 'Delete',
      action: (result: any) => {
        if (result.isConfirmed) {
          this.deleteData(id);
        }
      }
    };
    sweetAlert(rulesData);
  }

}
