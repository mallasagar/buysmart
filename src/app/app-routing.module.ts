import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AddproductComponent } from './admin/component/addproduct/addproduct.component';
import { EditproductComponent } from './admin/component/editproduct/editproduct.component';
import { UserlistComponent } from './admin/component/userlist/userlist.component';
import { OrderadminComponent } from './admin/component/order/order.component';

const routes: Routes = [
  {path:'admin',children:[
    {path:'addproduct',component:AddproductComponent},
    {path:'editproduct',component:EditproductComponent},
    {path:'order',component:OrderadminComponent},
    {path:'userlist',component:UserlistComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
