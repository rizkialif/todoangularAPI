import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Todo, TodoPost } from '../models/Todo';
import { environment } from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class TodoapiService {

  constructor(private http:HttpClient) { }

  // fungsi private method dibawah:
  private getDataTodo(response){
    return response.data
  }
  private getDataTodoid(response){
    return response.data
  }

  public getTodo(): Observable<Todo[]>{
    return this.http.get<Todo[]>(environment.baseUrl + 'newtodos').pipe(map(this.getDataTodo))
  }
  public getTodoId(_id:string): Observable<Todo[]>{
    return this.http.get<Todo[]>(environment.baseUrl + 'newtodos/' +_id).pipe(map(this.getDataTodoid))
  }
  public postTodo(newtodo:TodoPost): Observable<boolean>{
    return this.http.post(environment.baseUrl + 'newtodos' , newtodo).pipe(map(result => true))
  }
  public updateTodo(newtodo:Todo): Observable<boolean>{
    return this.http.put(environment.baseUrl + 'newtodos/' +newtodo._id , newtodo).pipe(map(result => true))
  }
  public deleteTodo(_id:string): Observable<boolean>{
    return this.http.delete(environment.baseUrl + 'newtodos/' +_id).pipe(map(result => true))
  }
}
