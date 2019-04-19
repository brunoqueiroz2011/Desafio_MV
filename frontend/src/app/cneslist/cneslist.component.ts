import { Component, OnInit } from '@angular/core';
import { CnesList } from './cneslist.model';
import { CnesListService } from './cneslist.service';
import { listenToElementOutputs } from '@angular/core/src/view/element';

@Component({
  selector: 'mv-cneslist',
  templateUrl: './cneslist.component.html',
  styleUrls: ['./cneslist.component.css']
})
export class CneslistComponent implements OnInit {

  cnesLists : CnesList
  limit : number  
  cnesCount : number

  constructor(private cnesListService: CnesListService) { }

  ngOnInit() {
    this.limit = 10
    this.cnesListService.getQtdListCnes(this.cnesLists,this.limit).subscribe(cnesList => this.cnesLists = cnesList)

    this.cnesListService.getTotalCount().subscribe(cnesCount => this.cnesCount = cnesCount['value'])
  }

  moreRecords(){
    this.limit += 10
    this.cnesListService.getQtdListCnes(this.cnesLists,this.limit).subscribe(cnesList => this.cnesLists = cnesList)
  }

}
