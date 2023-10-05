import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-description',
  templateUrl: './card-description.component.html',
  styleUrls: ['./card-description.component.sass']
})
export class CardDescriptionComponent {
	@Input() gameType = '';
	@Input() gamePrice = '';
}
