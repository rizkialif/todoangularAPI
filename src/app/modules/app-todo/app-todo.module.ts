import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppTodoRoutingModule } from './app-todo-routing.module';

import { CrudTodoComponent } from './crud-todo/crud-todo.component';
import { ListTodoComponent } from './crud-todo/list-todo/list-todo.component';
import { PostTodoComponent } from './crud-todo/post-todo/post-todo.component';
import { DetailsTodoComponent } from './crud-todo/details-todo/details-todo.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms'


@NgModule({
  declarations: [CrudTodoComponent, ListTodoComponent, PostTodoComponent, DetailsTodoComponent],
  imports: [
    CommonModule,
    AppTodoRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AppTodoModule { }
