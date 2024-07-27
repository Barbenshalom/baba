import { Component, HostBinding, inject } from '@angular/core';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { AudioComponent } from '../audio/audio.component';
import { Lobby } from '../types';
import { SlotsComponent } from '../slots/slots.component';
const URL =
  'https://s3cdn.babawildslots.com/uploadImages/home-assignment-data.json';
@Component({
  selector: 'app-lobby',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, AudioComponent, SlotsComponent],
  templateUrl: './lobby.component.html',
  styleUrl: './lobby.component.scss',
})
export class LobbyComponent {
  private http = inject(HttpClient);
  public lobby = toSignal(this.http.get<Lobby>(URL));

  @HostBinding('style.--background-image') get backgroundImage() {
    return `url(${this.lobby()?.backgroundImage})`;
  }
}
