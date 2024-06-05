import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-point-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './point-table.component.html',
  styleUrl: './point-table.component.css',
})
export class PointTableComponent implements OnInit {
  pointTable: any;
  winLose:any
  data: any;
  constructor(private apiPointData: ApiServiceService) {}

  ngOnInit(): void {
    this.getPointTableData();
  }

  getPointTableData() {
    this.apiPointData.getPointTable().subscribe((res) => {
      // console.log(res);
      this.pointTable = res;
      // console.log(this.pointTable, 'Point table');

      // let data:any = this.pointTable.map((val: any) => {
      //   return { result: val.results, id: val.id };
      // });
      // console.log(data, 'data');
      // this.data = this.winLose
      // console.log(this.winLose,'lose');

    });
  }
}
