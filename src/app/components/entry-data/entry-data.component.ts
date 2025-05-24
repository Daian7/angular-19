import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-entry-data',
  imports: [FormsModule],
  templateUrl: './entry-data.component.html',
  styleUrl: './entry-data.component.css'
})
export class EntryDataComponent {
	placeholder:string = "email"
	placepass:string = "senha"
	color:string = "red"
}
