import "./styles/global.css";
import "./presentation/dashboard/Dashboard.css";

import { renderDashboard } from "./presentation/dashboard/Dashboard";

const app = document.querySelector<HTMLDivElement>("#app");

if (app) {
  app.innerHTML = renderDashboard();
}
