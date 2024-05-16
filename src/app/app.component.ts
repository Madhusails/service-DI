import { Component, OnInit } from '@angular/core';
import { SubscribeService } from './Services/subscribe.service';
import { Observable, from, of, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  //providers: [SubscribeService]
})
export class AppComponent implements OnInit{
  title = 'dependency';

  //USING OBSERVABLE CONSTRUCTOR
  // myObservable = new Observable((observer) => {
  //   console.log('observer starts')
  //   setTimeout(()=>{observer.next("1")},1000)
  //   setTimeout(()=>{observer.next("2")},2000)
  //   setTimeout(()=>{observer.next("3")},3000)
  //   setTimeout(()=>{observer.error(new Error('something went wrong! please try again later'))},3000)
  //   setTimeout(()=>{observer.next("4")},4000)
  //   setTimeout(()=>{observer.next("5")},5000)
  //   setTimeout(()=>{observer.complete()},3000)
  //   // observer.next("1")
  //   // observer.next("2")
  //   // observer.next("3")
  //   // observer.next("4")
  //   // observer.next("5")
  // });


  //USING CREATE METHOD
  // myObservable = Observable.create((observer: { next: (arg0: string) => void; error: (arg0: Error) => void; complete: () => void; }) => {
  //   setTimeout(()=>{observer.next("A")},1000)
  //   setTimeout(()=>{observer.next("B")},2000)
  //   setTimeout(()=>{observer.next("C")},3000)
  //   setTimeout(()=>{observer.error(new Error('something went wrong! please try again later'))},3000)
  //   setTimeout(()=>{observer.next("D")},4000)
  //   setTimeout(()=>{observer.next("E")},5000)
  //   setTimeout(()=>{observer.complete()},3000)
  // })

  array1 = [1,2,6,7,8];
  array2 = ['A','B','C'];

  //myObservable = of(this.array1, this.array2);

  // myObservable = from(this.array1);
  ngOnInit() {
    // this.counterSub = this.counterObservable.subscribe((val) => {
    //   console.log(val);
    // })
  }
  counterObservable = interval(1000);
  counterSub: Subscription | undefined;
  
  unsubscribe() {
    this.counterSub?.unsubscribe();
  }

  subscribe() {
    this.counterSub = this.counterObservable.subscribe((val) => {
      console.log(val);
    })
  }

  // ngOnInit() {
  //   this.myObservable.subscribe((val) => {
  //     console.log("The valuse is " + val);
  //   }, (error: { message: any; }) => {
  //     alert(error.message);
  //   }, () => {
  //     alert('Observable has completed emitting all values.')
  //   });
  // }
}
