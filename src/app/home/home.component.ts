import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  trendingMovies: any;
  
  constructor(private http: HttpClient) {}

  ngOnInit():void {
    this.getTrendingMovies();
  }

  getTrendingMovies() {
    this.http.get("http://localhost:4200/assets/data/trending-movies.json").subscribe((movies) => {
      this.trendingMovies = movies;
    });
  }

  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    alert(`Old Value:${$event.oldValue}, 
      New Value: ${$event.newValue}, 
      Checked Color: ${$event.starRating.checkedcolor}, 
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }
}
