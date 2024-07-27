import { Component, computed, input } from '@angular/core';
import { Slot } from '../types';
import { SlicePipe } from '@angular/common';
import { JackpotComponent } from '../jackpot/jackpot.component';
import { RouterLink } from '@angular/router';
type PageNavigation = 'previous' | 'next';
const MAX_SLOTS_AMOUNT = 4 as const;

@Component({
  selector: 'app-slots',
  standalone: true,
  imports: [SlicePipe, JackpotComponent, RouterLink],
  templateUrl: './slots.component.html',
  styleUrl: './slots.component.scss',
})
export class SlotsComponent {
  public slots = input.required<Slot[]>();
  public position = 0;
  public sortedSlots = computed(() =>
    [...this.slots()].sort((slotA, SlotB) =>
      slotA.order > SlotB.order ? 1 : -1
    )
  );
  get getPages() {
    return Math.ceil(this.slots()!.length / MAX_SLOTS_AMOUNT);
  }

  get start() {
    return this.position * MAX_SLOTS_AMOUNT;
  }

  get end() {
    return this.position * MAX_SLOTS_AMOUNT + MAX_SLOTS_AMOUNT;
  }

  public navigate(navigate: PageNavigation) {
    if (navigate === 'previous') {
      if (this.position === 0) this.position = this.getPages - 1;
      else this.position--;
    } else if (navigate === 'next') {
      if (this.position === this.getPages - 1) this.position = 0;
      else this.position++;
    }
  }
}
