import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './component/category/category.component';
import { HomeComponent } from './component/home/home.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ProductComponent } from './component/product/product.component';
import { ShopComponent } from './component/shop/shop.component';
import { SubCategoryComponent } from './component/sub-category/sub-category.component';
import { DetailsComponent } from './shered/details/details.component';

const routes: Routes = [
  {path:'Home',component:HomeComponent},
  {path:'category/:id',component:CategoryComponent},
  {path:'shop/:idShop',component:ShopComponent},
  {path:'shop/:idShop/product/:idprod',component:ProductComponent},
  {path:'subCategory/:subID',component:SubCategoryComponent},
  {path:'details/show/:detailsID',component:DetailsComponent},
  {path:'product/:idProduct',component:ProductComponent},
  {path:'',redirectTo:'Home',pathMatch:'full'},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
