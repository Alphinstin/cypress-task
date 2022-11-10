import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SideMenuService } from 'src/app/shared/services/side-menu.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage, CommonModule, SharedModule],

  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public sideMenuService: SideMenuService) {}

  ngOnInit(): void {}
}
