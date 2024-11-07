import { createRoot } from "react-dom/client";

import store from "./app/store";
import { Provider } from "react-redux";

import "./includes/includes.tsx";
import App from "./App.tsx";

const root = createRoot(document.getElementById("root")!);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
