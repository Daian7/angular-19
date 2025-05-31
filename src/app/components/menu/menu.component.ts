import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: `
	h1 {color: blue}
	`
})
export class MenuComponent {
  name = 'Daian';
	carrinho = {
		comprar: { button: "Comprar"}
	};
	@Input() label: string = "";

	//Event Binding
	getEvent(num: number) {
		alert(this.label + num)
	}

}
