import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'

})
export class TodoService {
  constructor(private http: HttpClient) {
  }

  getTodoList(): Observable<any> {
    const url = "https://jsonplaceholder.typicode.com/todos"
    return this.http.get(url)//post,delete...
  }
}

export class todoService {
}
