import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-groups',
  templateUrl: './groups.html',
  styleUrls: ['./groups.scss'],
  imports: [CommonModule],
})
export class GroupsComponent {
  groupId: string | null = null;
  randomGroup: number | null = null;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.groupId = params.get('id');
    });
  }

  generateGroup() {
    this.randomGroup = 6130 + Math.floor(Math.random() * 10);
  }
}
