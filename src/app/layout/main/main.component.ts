import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentModule } from 'src/app/components/components.module';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ComponentModule, RouterModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
