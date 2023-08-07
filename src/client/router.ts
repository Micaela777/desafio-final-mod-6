import { Router } from '@vaadin/router';

const router = new Router(document.querySelector('.root'));
router.setRoutes([
  { path: '/', component: 'home-page' },
  { path: '/form-options', component: 'form-options-page' },
  { path: '/registration', component: 'registration-page' },
  { path: '/log-in', component: 'log-in-page' },
  { path: '/pre-game', component: 'pregame-options-page'},
  { path: '/new-game', component: 'new-chatroom-page' },
  { path: '/enter-the-room', component: 'enter-the-room-page' },
  { path: '/play', component: 'play-page' },
]);