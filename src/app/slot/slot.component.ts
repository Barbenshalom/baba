import { Component, HostBinding, OnInit } from '@angular/core';
const URL = '/slot-1128/symbol_';

@Component({
  selector: 'app-slot',
  standalone: true,
  templateUrl: './slot.component.html',
  styleUrl: './slot.component.scss',
})
export class SlotComponent implements OnInit {
  public first!: string[];
  public second!: string[];
  public third!: string[];
  public fourth!: string[];
  public fifth!: string[];
  public moveTo = 0;
  public isAnimate = false;
  @HostBinding('style.--move-to') get moveToPos() {
    return `calc(-${this.moveTo}px)`;
  }
  ngOnInit() {
    let symbols = [];
    for (let i = 1; i <= 12; i++) {
      symbols.push(`${URL}${i}.png`);
    }
    this.first = this.shuffleArray(symbols);
    this.second = this.shuffleArray(symbols);
    this.third = this.shuffleArray(symbols);
    this.fourth = this.shuffleArray(symbols);
    this.fifth = this.shuffleArray(symbols);
  }

  spin() {
    this.isAnimate = true;
    const selectedSymbol = this.getRandomIntInclusive(0, 11);
    const element = document.getElementById(`first-column-${selectedSymbol}`)!;
    this.moveTo = element.offsetTop;
    setTimeout(() => {
      this.isAnimate = false;
      this.first.unshift(this.first.splice(selectedSymbol, 1)[0]);
      this.second.unshift(this.second.splice(selectedSymbol, 1)[0]);
      this.third.unshift(this.third.splice(selectedSymbol, 1)[0]);
      this.fourth.unshift(this.fourth.splice(selectedSymbol, 1)[0]);
      this.fifth.unshift(this.fifth.splice(selectedSymbol, 1)[0]);
    }, 2000);
  }

  private getRandomIntInclusive(min: number, max: number) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
  }

  private shuffleArray(symbols: string[]) {
    const symbolsCopy = [...symbols];
    for (let i = symbolsCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [symbolsCopy[i], symbolsCopy[j]] = [symbolsCopy[j], symbolsCopy[i]];
    }
    return symbolsCopy;
  }
}
