import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-offer-form-resource-block',
  templateUrl: './offer-form-resource-block.component.html',
  styleUrls: ['./offer-form-resource-block.component.scss']
})
export class OfferFormResourceBlockComponent implements OnInit {

  @Input('good') g;
  @Output() delete: EventEmitter<void> = new EventEmitter<void>();


  constructor() {
  }


  ngOnInit(): void {
  }


  deleteItem() {
    this.delete.emit();
  }
}
