
import { Component, OnInit } from '@angular/core';
import {Gazeta} from '../gazeta';
import {GAZETY} from '../mock-gazety';
@Component({
  selector: 'app-gazety',
  templateUrl: './gazety.component.html',
  styleUrls: ['./gazety.component.css']
})
export class GazetyComponent implements OnInit {
gazety = GAZETY ;
  constructor() { }

  selectedGazeta: Gazeta;
  onSelect(gazeta: Gazeta): void {
    this.selectedGazeta = gazeta;
  }
  ngOnInit() {
  }

}
