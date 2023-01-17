import { MatDialog } from '@angular/material/dialog';
import { ProductService } from './../../services/product/product.service';
import { ActionProductComponent } from './action-product/action-product.component';
import { RulesSweetAlert } from './../../@core/model/global-swal-model';
import { Component, OnInit } from '@angular/core';
import { sweetAlert } from 'src/app/@core/helper';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: any

  constructor(
    private ProductService: ProductService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData = () => {
    const param = {
      size: ''
    }
    this.ProductService.getAll(param).subscribe(
      (resp) => {
        this.product = resp
      }
     )
  }

  action = (productData = null) => {
      const dialogRef = this.dialog.open(ActionProductComponent, {
        width : '700px',
        maxHeight: '100vh',
        data : productData
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
    this.ProductService.Delete(id).subscribe(
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
