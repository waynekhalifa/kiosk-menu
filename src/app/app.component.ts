import { HostListener, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Ovio Self Service';

  @HostListener('document:keyup', ['$event'])
  @HostListener('document:click', ['$event'])
  @HostListener('document:wheel', ['$event'])
  resetTimer() {
    // user action occured
  }

  // endCount = new Subject();

  // // end time in minutes
  // private initTimer(endTime: number) {
  //   const interval = 1000;
  //   const duration = endTime * 60;

  //   this.subscription = Observable.timer(0, interval)
  //     .take(duration)
  //     .subscribe(
  //       (value) => this.render((duration - +value) * interval),
  //       (err) => {},
  //       () => {
  //         this.endCount.next();
  //       }
  //     );
  // }

  // private render(count) {
  //   this.secondsDisplay = this.getSeconds(count);
  //   this.minutesDisplay = this.getMinutes(count);
  // }

  // private getSeconds(ticks: number) {
  //   const seconds = ((ticks % 60000) / 1000).toFixed(0);
  //   return this.pad(seconds);
  // }

  // private getMinutes(ticks: number) {
  //   const minutes = Math.floor(ticks / 60000);
  //   return this.pad(minutes);
  // }

  // private pad(digit: any) {
  //   return digit <= 9 ? '0' + digit : digit;
  // }
}
