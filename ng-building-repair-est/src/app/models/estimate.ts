export class Estimate {
    estimate_id: number;
    mat_cost: number;
    lab_cost: number;
    inc_cost: number;
    tot_cost: number;
    notes: string;
    
    constructor(mat_cost, lab_cost, inc_cost, tot_cost, notes){
        // this.user_id = null;
        this.mat_cost = mat_cost;
        this.lab_cost = lab_cost;
        this.inc_cost = inc_cost;
        this.tot_cost = tot_cost;
        this.notes = notes;
    }
}
