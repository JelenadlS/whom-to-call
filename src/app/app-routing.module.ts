import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { AddDataPageComponent } from './pages/add-data-page/add-data-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ListComponent } from './pages/list/list.component';

const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'add',
        component: AddDataPageComponent
    },
    {
        path: 'list',
        component: ListComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }