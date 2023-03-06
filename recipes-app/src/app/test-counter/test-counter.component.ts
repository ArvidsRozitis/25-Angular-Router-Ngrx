import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
// import { increment, decrement, reset } from '../../store/recipes.actions';

@Component({
  selector: 'app-test-counter',
  templateUrl: './test-counter.component.html',
  styleUrls: ['./test-counter.component.scss'],
})
export class TestCounterComponent {
  // recipe$: Observable<number>
  // constructor(private store: Store<{ recipe: number }>) {
  //   this.recipe$ = store.select('recipe');
  // }
 
  // increment() {
  //   this.store.dispatch(increment());
  // }
 
  // decrement() {
  //   this.store.dispatch(decrement());
  // }
 
  // reset() {
  //   this.store.dispatch(reset());
  // }
}
