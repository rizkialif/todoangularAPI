import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoapiService } from './../../../../sharedservice/todoapi.service';
import { Todo, TodoPost } from './../../../../models/Todo';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-post-todo',
  templateUrl: './post-todo.component.html',
  styleUrls: ['./post-todo.component.css']
})
export class PostTodoComponent implements OnInit {
  todoform = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });
  constructor(private todoapiService: TodoapiService) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    const todo : TodoPost = {
      // id:null,
      title: this.todoform.get('title').value,
      description: this.todoform.get('description').value
    };
    // console.log(todo);
    this.todoapiService.postTodo(todo)
    .subscribe(
      success => {
        alert("Berhasil tambah data")
        window.location.reload()

      },
      error =>{

      }
    );
  }
}
