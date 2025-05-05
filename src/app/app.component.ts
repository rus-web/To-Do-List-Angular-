import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  styleUrl: './app.component.css',
  standalone: false,
  templateUrl: './app.component.html',
})

export class AppComponent {
  title = 'To-Do-List';
  tasksUndone = ["Домашние дела","Разобраться с циклами JS","Покушать","Изучить что такое DOM"];
  tasksDone = ["Повторение CSS и HTML","Повторение HTML"];
  
  statusChange(taskStatus: string, task: string):
    void {
      let index;
      if(taskStatus==="undone"){
        index = this.tasksUndone.indexOf(task);
        this.tasksUndone.splice(index,1);
        this.tasksDone.push(task);
      } else{
        index = this.tasksDone.indexOf(task);
        this.tasksDone.splice(index,1);
        this.tasksUndone.push(task);
        }
     } 
  }


