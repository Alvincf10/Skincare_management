import { MatDialog } from '@angular/material/dialog';
import { IngredientService } from './../../../services/master-data/ingredient/ingredient.service';
import { ActionIngredientComponent } from './action-ingredient/action-ingredient.component';
import { RulesSweetAlert } from 'src/app/@core/model/global-swal-model';
import { sweetAlert } from 'src/app/@core/helper';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})
export class IngredientComponent implements OnInit {
  ingredient: any

  constructor(
    private ingredientService:IngredientService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllData()
  }


  getAllData = () => {
    const param = {
      size: ''
    }
    this.ingredientService.getAll(param).subscribe(
      (resp) => {
        this.ingredient = resp
      }
     )
  }

  action = (stockData = null) => {
      const dialogRef = this.dialog.open(ActionIngredientComponent, {
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
    this.ingredientService.Delete(id).subscribe(
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
