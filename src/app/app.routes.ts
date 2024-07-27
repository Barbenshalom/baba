import { CanActivateFn, Router, Routes } from '@angular/router';
import { LobbyComponent } from './lobby/lobby.component';
import { SlotComponent } from './slot/slot.component';
import { SlotUnavailableComponent } from './slot-unavailable/slot-unavailable.component';
import { inject } from '@angular/core';

export const slotGuard: CanActivateFn = (route, _state) => {
  const router = inject(Router);
  if (route.paramMap.get('slot') === '1128') return true;
  router.navigateByUrl('/slot-unavailable');
  return false;
};

export const routes: Routes = [
  { path: '', redirectTo: '/lobby', pathMatch: 'full' },
  {
    path: 'lobby',
    component: LobbyComponent,
    title: 'Lobby',
  },
  {
    path: 'slot/:slot',
    component: SlotComponent,
    title: 'Slot',
    canActivate: [slotGuard],
  },
  {
    path: 'slot-unavailable',
    component: SlotUnavailableComponent,
    title: 'Slot unavailable',
  },
] as const;
