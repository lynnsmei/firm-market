import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiHelloService } from './services/api-hello.service';
import { CommonModule } from '@angular/common';
import { Firm } from './models/market.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'market-angular';
  firms: Firm[] = [];

  constructor(private apiHelloService: ApiHelloService) {}

  ngOnInit() {
    this.apiHelloService.getFirms().subscribe((response) => {
      this.firms = response.firms;
    });
  }
}
