import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';

@Component({
  selector: 'app-matches',
  standalone: true,
  imports: [],
  templateUrl: './matches.component.html',
  styleUrl: './matches.component.css'
})
export class MatchesComponent implements OnInit {

  upcomingMatch:any

  constructor(private apiData : ApiServiceService){}

  ngOnInit(): void {
    this.getUpcomingMatch()
  }

  getUpcomingMatch(){
    this.apiData.matches().subscribe((res)=>{
      this.upcomingMatch = res
    })
  }

}
