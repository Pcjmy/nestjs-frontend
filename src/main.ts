import { createApp } from "vue";
import { setupStore } from "./store/index";
import { setupRouter } from "./router";
import App from "./App.vue";

function bootstrap() {
  const app = createApp(App);
  setupRouter(app);
  setupStore(app);
  app.mount("#app");
}

bootstrap();
