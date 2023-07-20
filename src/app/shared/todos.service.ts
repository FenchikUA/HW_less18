import { Injectable } from "@angular/core";
import { filter } from "rxjs";

export interface Todo {
  id: number,
  title: string,
  completed: boolean,
  date: any
}

@Injectable({ providedIn: 'root' })

export class TodoService {
  public todos: Todo[] = [
    {
      id: 1,
      title: 'JavaScript',
      completed: true,
      date: new Date()
    },
    {
      id: 2,
      title: 'Angular',
      completed: false,
      date: new Date()
    },
    {
      id: 3,
      title: 'React',
      completed: false,
      date: new Date()
    },
  ]
  onToggle(id: number) {
    const idx = this.todos.findIndex(t => t.id === id)
    this.todos[idx].completed = !this.todos[idx].completed
  }
  removeTask(id: number) {
    this.todos = this.todos.filter(t => t.id !== id)
  }
}