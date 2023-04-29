import {Component, OnInit} from '@angular/core';
import {TodoService} from "./services/todoService";
import {Comments} from "./Classes/comments";

@Component({
  selector: 'app-root', // it calls in index.html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  todo: any = []
  constructor(public todoService: TodoService) {
  }
  ngOnInit(): void { //directly call service here and display data from getAPI

    this.todoService.getTodoList().subscribe((response: any): void => {

      console.log(response)
      this.todo = response //add

    })
  }
}
