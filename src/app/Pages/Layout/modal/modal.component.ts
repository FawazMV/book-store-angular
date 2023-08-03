import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { modalMessageSelector } from 'src/app/Store/shared/shared.selector'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  message$ = this.store.select(modalMessageSelector)

  constructor (private store: Store) {}
}
