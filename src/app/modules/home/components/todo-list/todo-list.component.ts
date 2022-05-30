import { Component, DoCheck, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {

  //Pegando os dados do localStorage, caso ele venha vazio ele vai fazer um set de um array vazio, se ele vier preenchido vai ser convertido para objeto usando JSON.parse
  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem('list') || '[]');

    public setEmitTaskList(event: string){
      this.taskList.push({ task: event, checked: false });
    }

    public deleteItemTaskList(event: number){
      this.taskList.splice(event, event);
    }

    public deleteAllTaskList(){
      this.taskList = [];
    }

    public validationInput(event: String, index: number){

      if(event.length == 0){
        const confirm = window.confirm('Task está vazia, deseja Deletar?');

      if(confirm){
        this.deleteItemTaskList(index);
      }
     }
    }

  public setLocalStorage(){
    if(this.taskList){
      this.taskList.sort( (first,last) => Number(first.checked) - Number(last.checked) );
      localStorage.setItem("list", JSON.stringify(this.taskList));
    }
  }

  constructor() { }

  ngDoCheck(): void {
    this.setLocalStorage();
  }

}
