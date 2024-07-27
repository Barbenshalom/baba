import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  input,
} from '@angular/core';
@Component({
  selector: 'app-audio',
  standalone: true,
  styles: `
    :host {
      display:contents
    }
    img {
      width: 30px;
      aspect-ratio: 1;
      cursor: pointer;
    }
  `,
  template: `
    <audio #audio [src]="backgroundMusic()" autoplay loop></audio>
    @if(audio.paused) {
    <img src="/lobby/mute-icon.png" (click)="audio.play()" />
    } @else {
    <img src="/lobby/sound-on-icon.png" (click)="audio.pause()" />
    }
  `,
})
export class AudioComponent implements AfterViewInit {
  public backgroundMusic = input.required<string>();
  @ViewChild('audio') audio!: ElementRef<HTMLAudioElement>;

  /** try to play the audio as soon as possible  */
  ngAfterViewInit() {
    const interval = setInterval(() => {
      if (!this.audio.nativeElement.paused) clearInterval(interval);
      else {
        this.audio.nativeElement
          .play()
          .then(() => {
            clearInterval(interval);
          })
          .catch((err) => console.log(err));
      }
    }, 200);
  }
}
