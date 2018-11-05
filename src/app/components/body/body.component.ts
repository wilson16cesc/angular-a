import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  mi_variable = 'hola mundo';
  mostrar = true;
  // todos: any[];

  frase: any = {
    mensaje: 'hola a todos en el curso',
    autor: 'marquez'
  };
  personajes = ['spiderman', 'batman','superman'];

  todos = [
    {
      'title': 'primer tarea',
      'done': false
    },
    {
      'title': 'segunda tarea',
      'done': false
    }];

  addTodo(todo){
    this.todos.push({'title':todo.value, 'done': false });
  }

  clearCompleted(){
    console.log("hola a todos");
    this.todos = this.todos.filter((item) => {
      return !item.done;
    });
  }


  constructor() { }

  ngOnInit() {
  }

}
