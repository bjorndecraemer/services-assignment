import { Component, OnInit } from '@angular/core';
import {CounterService} from "../services/counter.service";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbackVisible = false;
  feedbackMessage : string = '';
  timerRef : any;

  constructor(private counterService : CounterService) {
    this.counterService.counterChanged.subscribe(
      (status: {actToInact : boolean, amount : number}) =>{
        this.showNewFeedback(status.actToInact, status.amount);
      })
  }

  showNewFeedback(actToInact : boolean, amount : number){
    if(this.timerRef){
      clearTimeout(this.timerRef);
    }
    if(actToInact){
      this.feedbackMessage = 'Switch from active to inactive triggered, count is at '+amount+' now!'
    }
    else{
      this.feedbackMessage = 'Switch from inactive to active triggered, count is at '+amount+' now!'
    }
    this.feedbackVisible = true;
    this.timerRef = setTimeout(()=> this.feedbackVisible = false, 5000);
  }

  ngOnInit() {
  }

}
