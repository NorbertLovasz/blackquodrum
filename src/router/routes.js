import Home from '../components/Views/Home';
import About from '../components/Views/About';
import Contact from '../components/Views/Contact';
import {createRouter,createWebHashHistory} from 'vue-router';

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/contact',
        component: Contact
    },
];

export const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})
