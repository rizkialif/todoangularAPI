import { Component, OnInit } from '@angular/core';
import { TodoapiService } from '../../../../sharedservice/todoapi.service';
import { Todo } from '../../../../models/Todo';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {

  todos$: Observable<Todo[]>;
  // response : any;
  constructor(private todoapiService: TodoapiService) { }

  ngOnInit(): void {
    this.todos$ = this.todoapiService.getTodo();

    // console.log(this.todos$);
  }

  delete(_id) : void {

    // console.log(_id);

    this.todoapiService.deleteTodo(_id)
    .subscribe(
      success => {
       alert("Berhasil hapus data")
       window.location.reload()
      },
      error =>{

      }
    )
  }

}
