import { ForecastComponent } from './components/forecast/forecast.component';
import { UserComponent } from './components/user/user.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadComponent } from './components/upload/upload.component';

const routes: Routes = [
  {
    path:'',
    component:WrapperComponent,
    children:[
      {path:'',redirectTo:'/upload',pathMatch:'full'},
      {
        path:'upload',
        component:UploadComponent
      },
      {
        path:'user',
        component:UserComponent
      },
      {
        path:'forecast',
        component:ForecastComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
