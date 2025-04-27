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
}
