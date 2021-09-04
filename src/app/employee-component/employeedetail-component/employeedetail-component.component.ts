import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './employeedetail-component.component.html',
  styleUrls: ['./employeedetail-component.component.css']
})
export class EmployeedetailComponentComponent implements OnInit {
  pageTitle: string = 'Employee Detail';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${id}`;
  }
}
