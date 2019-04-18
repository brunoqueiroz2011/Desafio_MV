import { Component, OnInit } from '@angular/core';
import { CnesTypes } from './cnestypes.model';
import { CnesTypesService } from './cnestypes.service';

@Component({
  selector: 'mv-cnestypes',
  templateUrl: './cnestypes.component.html',
  styleUrls: ['./cnestypes.component.css']
})
export class CnestiposComponent implements OnInit {

  cnesTypes : CnesTypes

  constructor(private cnesTypesService: CnesTypesService) { }

  ngOnInit() {
    this.cnesTypesService.getQtdTypes(this.cnesTypes).subscribe(cnesType => this.cnesTypes = cnesType)    
  }

}
