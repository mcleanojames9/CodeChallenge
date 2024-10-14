import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estimate } from 'src/app/models/estimate'
import { DataTransferService } from 'src/app/services/data-transfer.service';

@Component({
  selector: 'app-estimate',
  templateUrl: './estimate.component.html',
  styleUrls: ['./estimate.component.css']
})
export class EstimateComponent implements OnInit {
  estimate:Estimate;
  constructor(private dtService: DataTransferService, public router :Router) { }

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
  notes: string = "None";

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
    this.materialCost=parseInt(this.matCost.split('$')[1])
    this.laborCost=parseInt(this.labCost.split('$')[1])
    this.inclusiveCost=parseInt(this.incluCost.split('$')[1])
    this.totalCost = this.materialCost+this.laborCost+this.inclusiveCost
      
    this.totalBox = true;
  }
openNewRoute(){
  this.router.navigate(['home']);
}
saveEstimate(){
  this.estimate = new Estimate(this.materialCost, this.laborCost, this.inclusiveCost, this.totalCost, this.notes)
  this.dtService.saveEstimate(this.estimate).subscribe(
    (response)=>{
      console.log(response);
    }
  )
}

}
