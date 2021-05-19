
import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote-class/quote';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  quote: Quote;

  constructor(private http: HttpClient) { 
  }

  ngOnInit()  {
    interface ApiResponse {
      author: string;
      quote: string;
    }
    this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(response => {
        this.quote = new Quote(response.author, response.quote);
    });

    
  }
}
