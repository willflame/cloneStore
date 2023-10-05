import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent {
	@Input() gameCover = '';
	@Input() gameLabel = '';
	@Input() gameType = '';
	@Input() gamePrice = '';
}
