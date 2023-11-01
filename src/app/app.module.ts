import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; 
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ApplayoutComponent } from './applayout/applayout.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { SidebarComponent } from './admin/component/sidebar/sidebar.component';
import { HeaderComponent } from './admin/component/header/header.component';
import { FooterComponent } from './admin/component/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { AddproductComponent } from './admin/component/addproduct/addproduct.component';
import { EditproductComponent } from './admin/component/editproduct/editproduct.component';
import { DeleteproductComponent } from './admin/component/deleteproduct/deleteproduct.component';
import { NavbarComponent } from './user/navbar/navbar.component';
import { DetailComponent } from './pages/detail/detail.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErrorComponent } from './pages/error/error.component';
import { ErrorlayoutComponent } from './error/errorlayout/errorlayout.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserlistComponent } from './admin/component/userlist/userlist.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatDialogModule } from '@angular/material/dialog';
import { UpdateproductComponent } from './admin/component/editproduct/updateproduct/updateproduct.component';
import { CartComponent } from './user/cart/cart.component'
// import {NgxWebstorageModule} from 'ngx-webstorage';

const route:Routes =[
  {path:'home',redirectTo:'',pathMatch:'full'},
  {path: '', component:HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'product', component:DetailComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'mycart', component:CartComponent},
  {path:'**', component:ErrorComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    ApplayoutComponent,
    AdminComponent,
    UserComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    AddproductComponent,
    EditproductComponent,
    DeleteproductComponent,
    NavbarComponent,
    DetailComponent,
    ContactComponent,
    ErrorComponent,
    ErrorlayoutComponent,
    LoginComponent,
    RegisterComponent,
    UserlistComponent,
    HomeComponent,
    UpdateproductComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    RouterModule.forRoot(route),
    ReactiveFormsModule, 
    HttpClientModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot({
      timeOut: 1000,
    }),
    MatSlideToggleModule
    // NgxWebstorageModule
    ,MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
