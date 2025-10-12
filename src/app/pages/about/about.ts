import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrls: ['./about.scss'],
  imports: [RouterLink],
})
export class AboutComponent {
  groupId = '6131-020402D';
}
