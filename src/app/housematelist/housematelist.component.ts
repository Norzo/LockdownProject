import { Component, OnInit } from '@angular/core';
import { Housemate } from 'src/app/housemate';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-housematelist',
  templateUrl: './housematelist.component.html',
  styleUrls: ['./housematelist.component.css']
})
export class HousematelistComponent implements OnInit {

  housemate : Housemate = {
    id: 1,
    name: 'Markus Andhoey',
    houseid: 1,
    jobid: 1
  };

  constructor() { }

  ngOnInit(): void {
  }

}
