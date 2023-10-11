import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AddproductComponent } from './admin/component/addproduct/addproduct.component';
import { EditproductComponent } from './admin/component/editproduct/editproduct.component';
import { DeleteproductComponent } from './admin/component/deleteproduct/deleteproduct.component';

const routes: Routes = [
  {path:'admin',children:[
    {path:'addproduct',component:AddproductComponent},
    {path:'editproduct',component:EditproductComponent},
    {path:'deleteproduct',component:DeleteproductComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
