import Header from './components/Header.vue';
import SignUp from './components/log/SignUp.vue';
import LogIn from './components/log/LogIn.vue';
import Home from './components/Home.vue';
import Profile from './components/UserProfile.vue';
import GameHome from './components/game/GameHome.vue';
import Addition from './components/game/Add.vue';
import Subtraction from './components/game/Sub.vue';
import Multiplication from './components/game/Mul.vue';
import Division from './components/game/Div.vue';
import Result from './components/game/Result.vue';

export const routes = [
    { path: '/signup', component: SignUp, name: 'signup' },
    { path: '/login', component: LogIn, name: 'login' },
    { path: '/', component: Home, name: 'home' },
    { path: '/profile', component: Profile },
    { path: '/gamehome', component: GameHome, name: 'gamehome' },
    { path: '/addition', component: Addition, name: 'addition' },
    { path: '/subtraction', component: Subtraction, name: 'subtraction' },
    { path: '/multiplication', component: Multiplication, name: 'multiplication' },
    { path: '/division', component: Division, name: 'division' },
    { path: 'result', component: Result, name: 'result' }
]