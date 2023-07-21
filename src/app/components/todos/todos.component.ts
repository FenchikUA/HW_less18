import { Component, OnInit } from '@angular/core';
import { TodoService, Todo } from 'src/app/shared/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(public todosService: TodoService) { }
  ngOnInit(): void {

  }
  onChange(id: number) {
    this.todosService.onToggle(id)
  }
  removeTask(id: number) {
    this.todosService.removeTask(id)
  }

  addTask(newTodoText: string) {
    if (newTodoText.trim() !== '') {
      const newTodo: Todo = {
        id: this.todosService.todos.length + 1,
        title: newTodoText,
        completed: false,
        date: new Date()
      };
      this.todosService.todos.push(newTodo);
    }
  }
}
