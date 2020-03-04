import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Subscription, combineLatest } from 'rxjs';
import { Service1Service } from 'src/app/services/service1.service';
import { Service2Service } from 'src/app/services/service2.service';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit, OnChanges, OnDestroy {

  private data: string;
  private subscription: Subscription;
  private subscriptions = new Subscription();

  constructor(
    private serviceOne: Service1Service,
    private serviceTwo: Service2Service
  ) { }

  ngOnInit(): void {
    // this.serviceOne.getData().subscribe(x => console.log(x));
    // this.serviceTwo.getData().subscribe(x => this.data = x);
    // console.log('data', this.data); // undefined b/c the service has a 2 second delay

    // this way we only have to unsubscribe to 1 thing
    // this.subscriptions.add(this.serviceOne.getData().subscribe(x => console.log(x)));
    // this.subscriptions.add(this.serviceTwo.getData().subscribe(x => this.data = x));

    this.subscription = combineLatest(
      [this.serviceOne.getData(),
      this.serviceTwo.getData()]
    ).subscribe(x => console.log(x)); // prints ['one', 'two']
  }

  ngOnChanges(): void {
    // not triggered by changes to data property
    console.log('onChanges called');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
