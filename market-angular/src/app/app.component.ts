import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiHelloService } from './services/api-hello.service';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'market-angular';
  helloMessage: string = '';

  constructor(private apiHelloService: ApiHelloService) {}

  ngOnInit() {
    this.apiHelloService.getHello()
    .subscribe((response) => {
        this.helloMessage = response.message;
      }
    );
  }
}
