import { sweetAlert } from 'src/app/@core/helper';
import { RulesSweetAlert } from 'src/app/@core/model/global-swal-model';
import { IngredientService } from './../../../../services/master-data/ingredient/ingredient.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { IngredientModel } from 'src/app/@core/model/ingredient.model';

@Component({
  selector: 'app-action-ingredient',
  templateUrl: './action-ingredient.component.html',
  styleUrls: ['./action-ingredient.component.scss']
})
export class ActionIngredientComponent implements OnInit {
  ingredientData = new IngredientModel()

  constructor(
    public dialogRef: MatDialogRef<ActionIngredientComponent>,
    private ingredientService: IngredientService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if(data){
      this.ingredientData = data
    }
   }

  ngOnInit(): void {
  }

  submitData = () => {
    let validation = false;
    let text = '';
    if (!this.ingredientData.ingridientName){
      validation = true;
      text = 'bahan harus diisi';
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
      id: this.ingredientData.id,
      ingridientName: this.ingredientData.ingridientName
    };  
    if (this.ingredientData.id){
      param.id = this.ingredientData.id;
      this.ingredientService.Update(param).subscribe(
        data => {
          if(data){
            this.dialogRef.close('Mengubah data');
          }
        }
      );
    }else{
      this.ingredientService.save(param).subscribe(
        data => {
          if(data){
            this.dialogRef.close('Menambah data');
          }
        }
      );
    }
  }

}
