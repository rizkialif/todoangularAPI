import { HomepageComponent } from './homepage/homepage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'', component: HomepageComponent},
  {
    path: 'todoapp',
    loadChildren: () => import('./modules/app-todo/app-todo.module').then(m => m.AppTodoModule)
  },
  {
    path: 'todoapp',
    loadChildren: () => import('./modules/app-todo/app-todo.module').then(m => m.AppTodoModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
  },
  {path:'',redirectTo:'home',pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
