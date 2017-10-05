import { Component, OnInit , ViewEncapsulation} from '@angular/core';
import { DataService } from '../../service/data.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation:ViewEncapsulation.Native
})
export class HeaderComponent implements OnInit {
result;
  constructor(
    private service : DataService
  ) {
    
  }
  ngOnInit(){
    this.service.get().subscribe((res) => {
      this.result = res.json();
      console.log(this.result);
    })
  }
}
