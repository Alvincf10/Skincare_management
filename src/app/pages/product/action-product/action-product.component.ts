import { IngredientService } from './../../../services/master-data/ingredient/ingredient.service';
import { CategoryService } from './../../../services/master-data/category/category.service';
import { StockService } from 'src/app/services/master-data/stock/stock.service';
import { sweetAlert } from 'src/app/@core/helper';
import { RulesSweetAlert } from 'src/app/@core/model/global-swal-model';
import { ProductService } from './../../../services/product/product.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductModel } from './../../../@core/model/product.model';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-action-product',
  templateUrl: './action-product.component.html',
  styleUrls: ['./action-product.component.scss']
})
export class ActionProductComponent implements OnInit {
  productData = new ProductModel();
  stock: any
  ingredient: any;
  category: any
  stockData: any
  categoryData: any
  ingredientData: any

  constructor(
    public dialogRef: MatDialogRef<ActionProductComponent>,
    private productService: ProductService,
    private stockService: StockService,
    private categoryService:CategoryService,
    private ingredientService: IngredientService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    if(data){
      this.productData = data
    }
  }

  ngOnInit(): void {
    this.getAllStock();
    this.getAllCategory();
    this.getAllIngredient();
  }

  getAllStock = () => {
    const param = {
      size: ''
    }
    this.stockService.getAll(param).subscribe(
      (resp) => {
        this.stock = resp
        this.stockData = this.stock[0];

      }
     )
  }
  getAllCategory = () => {
    const param = {
      size: ''
    }
    this.categoryService.getAll(param).subscribe(
      (resp) => {
        this.category = resp
        this.categoryData = this.category[0];
      }
     )
  }

  getAllIngredient = () => {
    const param = {
      size: ''
    }
    this.ingredientService.getAll(param).subscribe(
      (resp) => {
        this.ingredient = resp
        this.ingredientData  = this.ingredient[0];
      }
     )
  }

  onUpdate = ( event: any) =>{
    console.log( event.target)
  }

  submitData = () => {
    let validation = false;
    let text = '';
    if (!this.productData.productName){
      validation = true;
      text = 'Nama produk harus diisi';
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
      id: this.productData.id,
      productName: this.productData.productName,
      createdAt: this.productData.createdAt,
      expiredProduct: this.productData.expiredDate,
      stock: {
        id: this.stockData.id,
        quantityStock: this.stockData.quantityStock
      },
      category: {
        id: this.categoryData.id,
        categoryName: this.categoryData.categoryName
      },
      ingridient: {
        id: this.ingredientData.id,
        ingridientName: this.ingredientData.ingridientName
      }
    };
    if (this.productData.id){
      param.id = this.productData.id;
      this.productService.Update(param).subscribe(
        data => {
          if(data){
            this.dialogRef.close('Mengubah data');
          }
        }
      );
    }else{
      this.productService.save(param).subscribe(
        data => {
          if(data){
            this.dialogRef.close('Menambah data');
          }
        }
      );
    }
  }

}
