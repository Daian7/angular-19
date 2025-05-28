import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy {

	@Input() name: string = "";
	quantidade: number = 0;

	adicionar(){
		this.quantidade += 1;
	}

	subtrair(){
		this.quantidade -= 1;
	}

	//Lifecycle Hooks

	//primeiro método a ser iniciado durante a construção do componente
	constructor() {
		console.log(`Construtor ${this.name}`)
	}

	//2º método a ser iniciado, caso ouver alteração em algum component ex a view alterando o componente por meio do @Input
	ngOnChanges(changes: SimpleChanges): void {
		console.log(`OnChanges ${this.name}`)
	}

	//3º Ao iniciar o component
	ngOnInit(): void {
		console.log(`OnInit ${this.name}`)
	}

	//4º Sempre que a View e os componentes forem renderizados
	ngDoCheck(): void {
		console.log(`ngDoCheck ${this.name}`)
	}

	//5º Após a criação dos conteudos (TS) forem criadas
	ngAfterContentInit(): void {
		console.log(`ngAfterContentInit ${this.name}`)
	}

	//6º Após a criação dos conteudos (TS) forem confirmadas
	ngAfterContentChecked(): void {
		console.log(`ngAfterContentChecked ${this.name}`)
	}

	//7º Após a criação da View (HTML) forem iniciadas
	ngAfterViewInit(): void {
		console.log(`ngAfterViewInit ${this.name}`)
	}

	//8º Após a criação da View (HTML) forem checadas
	ngAfterViewChecked(): void {
		console.log(`ngAfterViewChecked ${this.name}`)
	}

	/* Cada Manipulação da tela executa na sequencia
	* ngDoCheck
		ngAfterContentChecked
		ngAfterViewChecked
	*/

	//Quando destruirmos o componente
	ngOnDestroy(): void {
		console.log("Good bye")
	}

}
