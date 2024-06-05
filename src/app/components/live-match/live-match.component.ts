import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';

@Component({
  selector: 'app-live-match',
  standalone: true,
  imports: [],
  templateUrl: './live-match.component.html',
  styleUrl: './live-match.component.css'
})
export class LiveMatchComponent implements OnInit {

  liveScore:any

  constructor(private apiData : ApiServiceService){}

  ngOnInit(): void {

    this.getData()
    
  }

  getData(){
    this.apiData.getMatchScore().subscribe((res)=>{
      console.log(res);
      this.liveScore = res
      console.log(this.liveScore);
      
    })
  }

}
