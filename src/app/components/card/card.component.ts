import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  imports: [CommonModule, FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

	produtos:string[] = []
	menuType:string = ""
	estilo:string = ""
	corFundo: string = "red"
	corFonte: string = "yellow"

	constructor() {
		this.produtos = ["feijão", "arroz", "sabonete", "farinha"]
	}

	adicionar(){
		this.produtos.push("novo produto");
	}

	remover(){
		this.produtos.pop()
	}

	removerIndex(index: number){
		this.produtos.splice(index, 1);
	}

}
