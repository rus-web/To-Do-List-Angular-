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
    
      if(taskStatus==="undone"){
        this.tasksUndone.splice(this.tasksUndone.indexOf(task),1)
        this.tasksDone.push(task)
      } else{
      this.tasksDone.splice(this.tasksDone.indexOf(task),1)
      this.tasksUndone.push(task)
      }
    

  }
}

