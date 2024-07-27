import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-slot-unavailable',
  standalone: true,
  imports: [RouterLink],
  styles: `
  .container {
    display: flex;
    justify-content: center;
    padding: 1em;
    gap: 1em;
    align-items: center;
    flex-wrap: wrap;
  }
  button {
    cursor: pointer;
    font-size: 1.2rem;
  }
  `,
  template: `
    <div class="container">
      <span>slot is not available</span>
      <button type="button" [routerLink]="['']">back to lobby</button>
    </div>
  `,
})
export class SlotUnavailableComponent {}
