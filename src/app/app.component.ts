import { Component, OnInit } from '@angular/core';
import { DataService } from './service/data.service';


@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  // template: '<ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  result;
  selected:string;

  constructor(
    private service : DataService
  ) {
    
  }

  ngOnInit(){
    this.service.get().subscribe((res) => {
      this.result = res.json();
     // console.log(this.result);
    })
  }


  buttonClicked(){
    console.log('My own custom login');
  }

  onItemSelect(name){
    console.log('Item selected!!!!', name);
    this.selected = name.first + " " + name.last;
  }
 

  title : string = 'Jayant';
  


}
