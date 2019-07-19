import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  our:boolean = true;
  make: boolean = false;
  menuItems = new Array(30);
  cartCounter:number = 0;
  constructor() {}

  ngOnInit(): void {
    
  }

  public activate(which:number): void {
    if(which === 1){
      this.our = true;
      this.make = false;
    }else{
      this.make = true;
      this.our = false;
    }
    
    
  }

  public addCart(){
    this.cartCounter++;
  }

}
