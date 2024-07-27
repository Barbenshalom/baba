import { Component, OnInit } from '@angular/core';
const INITIAL_TIME_IN_SECONDS = 3600; // Initial time in seconds (1 hour = 3600 seconds)

@Component({
  selector: 'app-countdown',
  standalone: true,
  styles: `
  div {
    position: absolute;
    right: 0;
    z-index: 1;
    color: rgb(248, 58, 12);
    top: 15.2rem; 
  }
`,
  template: ` <div>{{ remainingTime }}</div> `,
})
export class CountdownComponent implements OnInit {
  private totalTimeInSeconds = INITIAL_TIME_IN_SECONDS;
  public remainingTime = this.formatTime(this.totalTimeInSeconds);

  ngOnInit() {
    // Start the countdown when the component is initialized
    setInterval(() => {
      if (this.totalTimeInSeconds === 0)
        this.totalTimeInSeconds = INITIAL_TIME_IN_SECONDS;
      else this.totalTimeInSeconds--;
      this.remainingTime = this.formatTime(this.totalTimeInSeconds);
    }, 1000);
  }

  private formatTime(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${this.padZero(Math.floor(minutes / 60))}:${this.padZero(
      minutes % 60
    )}:${this.padZero(remainingSeconds)}`;
  }

  private padZero(value: number) {
    return value < 10 ? `0${value}` : `${value}`;
  }
}
