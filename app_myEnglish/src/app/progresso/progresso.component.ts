import { Component, Input, OnInit , OnChanges} from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit ,OnChanges{

  @Input() public progresso: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    console.log(this.progresso) ; 
  }
  
}
