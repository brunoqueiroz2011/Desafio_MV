import { Component, OnInit } from '@angular/core';
import { CnesState } from './cnesstate.model';
import { CnesStateService } from './cnesstate.service';

@Component({
  selector: 'mv-cnesstate',
  templateUrl: './cnesstate.component.html',
  styleUrls: ['./cnesstate.component.css']
})
export class CnesstateComponent implements OnInit {

  cnesStates : CnesState

  constructor(private cnesStateService : CnesStateService) { }

  ngOnInit() {
    this.cnesStateService.getQtdStates(this.cnesStates).subscribe(cnesState => this.cnesStates = cnesState)
  }

}
