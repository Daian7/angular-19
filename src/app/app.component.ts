import { Component } from '@angular/core';
import { MenuComponent } from './components/menu.component';
import { EntryDataComponent } from './components/entry-data/entry-data.component';
import { FormsModule } from '@angular/forms';
import { TitleComponent } from './title/title.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [MenuComponent, EntryDataComponent, FormsModule, TitleComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-project';
	buttonName: string = "Eu sou um botão"
	isAlive: boolean = true;

	dispose():void{
		this.isAlive = !this.isAlive;
	}

}
