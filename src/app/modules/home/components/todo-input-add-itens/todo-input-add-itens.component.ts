import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit {

  //Declarando um EventEmitter para enviar do componente filho para o pai
  @Output() public emmitItemTaskList = new EventEmitter();

  public addItemTaskList: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  public submitItemTaskList(){

    //Validando para o cliente não digitar campos vazios
    this.addItemTaskList = this.addItemTaskList.trim();

    //Verificando se o cliente não deu apenas enter
    if(this.addItemTaskList){
      this.emmitItemTaskList.emit(this.addItemTaskList);
      this.addItemTaskList = "";
  }
  }

}
