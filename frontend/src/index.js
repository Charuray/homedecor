import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Use `react-dom/client`
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root")); // ✅ Correct way in React 18

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// Performance tracking (optional)
reportWebVitals();
