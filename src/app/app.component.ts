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
  tasksUndone = ["Домашние дела","Разобраться с циклами JS","Покушать","Изучить что такое DOM"]
  tasksDone = ["Повторение CSS и HTML","Повторение HTML"]
  
  statusChange(taskStatus: string, task: string){
    let indexUndone = this.tasksUndone.indexOf(task)// Индекс Undone дел
    let indexDone = this.tasksDone.indexOf(task) // Индекс Done дел 
      if(taskStatus==="undone"){
        this.tasksUndone.splice(indexUndone,1)
        this.tasksDone.push(task)
      } else{
      this.tasksDone.splice(indexDone,1)
      this.tasksUndone.push(task)
      }
  }
}

