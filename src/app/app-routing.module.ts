import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnewsComponent } from './technews/technews.component';
import { TopnewsComponent } from './topnews/topnews.component';
import { BusinessnewsComponent } from './businessnews/businessnews.component';

const routes: Routes = [
  {path: '', component:TopnewsComponent},
   {path: 'technews', component:TechnewsComponent},
   {path: 'businessnews', component:BusinessnewsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
