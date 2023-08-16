import { Router } from '@vaadin/router';

const router = new Router(document.querySelector('.root'));
router.setRoutes([
  { path: '/', component: 'home-page' },
  { path: '/auth', component: 'auth-page' },
  { path: '/pre-game-options', component: 'pre-game-options-page'},
  { path: '/new-game', component: 'new-chatroom-page' },
  { path: '/enter-the-room', component: 'enter-the-room-page' },
  { path: '/instructions', component: 'instructions-page' },
  { path: '/play', component: 'play-page' },
]);