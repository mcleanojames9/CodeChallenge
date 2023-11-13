import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estimate',
  templateUrl: './estimate.component.html',
  styleUrls: ['./estimate.component.css']
})
export class EstimateComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit(): void {
  }
  placeholder = "$0.00";
  repairInput: string = '';
  matCost: string = this.placeholder;
  materialCost : number = 0;
  matCostId = "matCost"
  labCost: string = this.placeholder;
  laborCost: number = 0;
  incluCost: string= this.placeholder;
  inclusiveCost: number = 0;
  totalCost: number = 0;
  totalBox: boolean = false;

  removeMDefault(){
    if (this.matCost == this.placeholder){
      this.matCost = "$"
    };
  }

  removeLDefault(){
    if (this.labCost == this.placeholder){
      this.labCost = "$"
    };
  }

  removeIDefault(){
    if (this.incluCost == this.placeholder){
      this.incluCost = "$"
    }else{
      this.totalCost -= this.inclusiveCost;
    };
  }

  updateCost(){
    this.totalCost = 
      parseInt(this.matCost.split('$')[1]) +
      parseInt(this.labCost.split('$')[1]) +
      parseInt(this.incluCost.split('$')[1])
    this.totalBox = true;
  }
openNewRoute(){
  this.router.navigate(['home']);
}

}
