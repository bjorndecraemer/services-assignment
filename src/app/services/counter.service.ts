import {EventEmitter} from "@angular/core";

export class CounterService{
  activeToInactiveCount : number = 0;
  inactiveToInactiveCount : number = 0;

  counterChanged = new EventEmitter<{actToInact : boolean, amount : number}>()

  addActiveToInactive(){
    this.activeToInactiveCount++;
    this.counterChanged.emit({actToInact : true, amount : this.activeToInactiveCount});
  }
  addInactiveToInactive(){
    this.inactiveToInactiveCount++;
    this.counterChanged.emit({actToInact : false, amount : this.inactiveToInactiveCount});
  }
}
