import { Component, OnDestroy, OnInit } from '@angular/core';
import { WebsocketService } from './services/websocket.service';


@Component({
  selector: 'app-root',
  styleUrl: './app.component.css',
  standalone: false,
  templateUrl: './app.component.html',
})

export class AppComponent implements OnDestroy, OnInit {

  constructor(private wsService: WebsocketService) { }


  ngOnInit(): void {
     console.log('Инициализация прошла успешно')
  };

  ngOnDestroy(): void {
  this.wsService.closeConnection()
  };


  title = 'To-Do-List';
  tasksUndone = ["Домашние дела", "Разобраться с циклами JS", "Покушать", "Изучить что такое DOM"];
  tasksDone = ["Повторение CSS и HTML", "Повторение HTML"];

  statusChange(taskStatus: string, task: string): void {
    let index;

    if (taskStatus === "undone") {
      index = this.tasksUndone.indexOf(task);
      this.tasksUndone.splice(index, 1);
      this.tasksDone.push(task);

      let obj = {
        status: "done",
        text: task
      };

      this.wsService.sendWS(obj)
    } else {
      index = this.tasksDone.indexOf(task);
      this.tasksDone.splice(index, 1);
      this.tasksUndone.push(task);

      let obj = {
        status: "undone",
        text: task
      };

      this.wsService.sendWS(obj)
    };

  }
}


