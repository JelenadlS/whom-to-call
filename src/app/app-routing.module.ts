import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { AddPersonPageComponent } from './pages/add-person-page/add-person-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';

const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'add',
        component: AddPersonPageComponent
    },
    {
        path: 'list',
        component: ListPageComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }