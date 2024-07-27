import { Component, HostBinding, Input } from '@angular/core';
@Component({
  selector: 'app-jackpot',
  standalone: true,
  styleUrl: './jackpot.component.scss',
  template: `<div></div>`,
})
export class JackpotComponent {
  @Input({ required: true }) jackpot!: number;
  @HostBinding('style.--jackpot') get jackpotNumber() {
    return this.jackpot;
  }
}
