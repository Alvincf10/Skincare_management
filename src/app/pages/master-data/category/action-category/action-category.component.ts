import { sweetAlert } from 'src/app/@core/helper';
import { RulesSweetAlert } from 'src/app/@core/model/global-swal-model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryService } from './../../../../services/master-data/category/category.service';
import { CategoryModel } from './../../../../@core/model/category.mode';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-action-category',
  templateUrl: './action-category.component.html',
  styleUrls: ['./action-category.component.scss']
})
export class ActionCategoryComponent implements OnInit {
  categoryData = new CategoryModel();

  constructor(
    public dialogRef: MatDialogRef<ActionCategoryComponent>,
    private CategoryService: CategoryService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if(data){
      this.categoryData = data
    }
   }

  ngOnInit(): void {
  }

  submitData = () => {
    let validation = false;
    let text = '';
    if (!this.categoryData.categoryName){
      validation = true;
      text = 'Nama kategori harus diisi';
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
      categoryName: this.categoryData.categoryName
    };
    if (this.categoryData.id){
      param.id = this.categoryData.id;
      this.CategoryService.Update(param).subscribe(
        data => {
          if(data){
            this.dialogRef.close('Mengubah data');
          }
        }
      );
    }else{
      this.CategoryService.save(param).subscribe(
        data => {
          if(data){
            this.dialogRef.close('Menambah data');
          }
        }
      );
    }
  }

}
