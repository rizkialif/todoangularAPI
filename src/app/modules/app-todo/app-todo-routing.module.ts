import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudTodoComponent } from './crud-todo/crud-todo.component';
import { DetailsTodoComponent } from './crud-todo/details-todo/details-todo.component';
import { PostTodoComponent } from './crud-todo/post-todo/post-todo.component';

const routes: Routes = [
  {path:'', component: CrudTodoComponent},
  {path:'detail/:_id', component: DetailsTodoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppTodoRoutingModule { }
