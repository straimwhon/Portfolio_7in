import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

// Register components if necessary (already done in App.vue)
// app.component('component-name', ComponentName);

app.mount('#app');
