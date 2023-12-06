import { Router } from '@vaadin/router';

const router = new Router(document.querySelector('.root'));
router.setRoutes([
  { path: '/', component: 'home-page' },
  { path: '/auth', component: 'auth-page' },
  { path: '/pre-game-options', component: 'pre-game-options-page'},
  { path: '/new-game', component: 'new-chatroom-page' },
  { path: '/enter-the-room', component: 'enter-the-room-page' },
  { path: '/waiting', component: 'waiting-page' },
  { path: '/lobby', component: 'lobby-page' },
  { path: '/instructions', component: 'instructions-page' },
  { path: '/play', component: 'play-page' },
  { path: '/full-room', component: 'full-room-page' },
  { path: '/playing', component: 'playing-page' },
  { path: '/hands', component: 'hands-page' },
  { path: '/results', component: 'results-page' },
  { path: '/no-choise', component: 'no-choise-page' },
]);