import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  search:string=''


  @Output()
  searchTextEvent : EventEmitter<string>= new EventEmitter<string>()

  @ViewChild('serachText') searchTextInput!:ElementRef;

  searchText(event:any){
    this.search=event.target.value;


  }
  onSearchText(){
    console.log();
    this.search=this.searchTextInput.nativeElement.value
    this.searchTextEvent.emit(this.search)

  }
}
