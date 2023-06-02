import { Router } from '@vaadin/router';

const router = new Router(document.querySelector('.root'));
router.setRoutes([
  { path: '/', component: 'home-page' },
  { path: '/authentication', component: 'authentication-page' },
  { path: '/pre-game', component: 'pregame-options-page'},
  { path: '/enter-the-room', component: 'enter-the-room-page' },
  { path: '/play', component: 'play-page' },
]);