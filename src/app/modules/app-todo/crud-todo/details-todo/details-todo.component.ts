import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoapiService } from './../../../../sharedservice/todoapi.service';
import { Todo, TodoPost } from './../../../../models/Todo';
import { FormGroup, FormControl } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-details-todo',
  templateUrl: './details-todo.component.html',
  styleUrls: ['./details-todo.component.css']
})
export class DetailsTodoComponent implements OnInit {
  todo : any;
  _id:any;
  title:string;
  description:string;

  todos : Todo;
  todoform = new FormGroup({
    _id: new FormControl(''),
    title: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(private todoapiService: TodoapiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this._id = this.route.snapshot.paramMap.get('_id')
    this.route.queryParams.subscribe(params=>{
      this.todoapiService.getTodoId(this._id)
      .subscribe(data=>{
         this.todo=data
        //  console.log(this.todo);

         this._id = this.todo.newtodo._id
         this.title = this.todo.newtodo.title
         this.description = this.todo.newtodo.description
      })
    })
    // console.log(this._id);

  }

  update() : void {
    const todo : Todo = {
      _id: this.todoform.get('_id').value,
      title: this.todoform.get('title').value,
      description: this.todoform.get('description').value
    };
    this.todoapiService.updateTodo(todo)
    .subscribe(
      success => {
        alert("Berhasil merubah data")
        this.router.navigateByUrl('/todoapp')
        // window.location.reload()

      },
      error =>{

      }
    );
  }

}
