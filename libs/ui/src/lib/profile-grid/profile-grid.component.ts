import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { UserProfile } from '../../../../feature-profile-details/src/lib/models';

@Component({
  selector: 'monofunworkspace-profile-grid',
  templateUrl: './profile-grid.component.html',
  styleUrls: ['./profile-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileGridComponent {
  @Input() users: UserProfile[];
  @Output() profileSelected = new EventEmitter<number>();

  displayedColumns: string[] = ['pictureUrl', 'name', 'email'];

  goToProfile(userId: number) {
    this.profileSelected.emit(userId);
  }
}
