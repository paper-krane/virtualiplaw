import { createApp } from 'vue';

// Routes / Stores
import { router } from './routes/router';

// Components
import App from './App.vue';

// SCSS
import '@/viplaw.scss'

const app = createApp(App);
app.use(router);

app.mount('#vi__app');
