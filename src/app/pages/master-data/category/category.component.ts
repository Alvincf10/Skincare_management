import { ActionCategoryComponent } from './action-category/action-category.component';
import { MatDialog } from '@angular/material/dialog';
import { CategoryService } from './../../../services/master-data/category/category.service';
import { sweetAlert } from 'src/app/@core/helper';
import { Component, OnInit } from '@angular/core';
import { RulesSweetAlert } from 'src/app/@core/model/global-swal-model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  category: any

  constructor(
    private categoryService: CategoryService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData = () => {
    const param = {
      size: ''
    }
    this.categoryService.getAll(param).subscribe(
      (resp) => {
        this.category = resp
      }
     )
  }


  action = (stockData = null) => {
    const dialogRef = this.dialog.open(ActionCategoryComponent, {
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
    this.categoryService.Delete(id).subscribe(
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
