import React from "react";
import ReactDOM from "react-dom";

import { SpeechProvider } from "@speechly/react-client";
import App from "./app";
import "./index.css";
import { Provider } from "./Context/Context";
ReactDOM.render(
  <SpeechProvider appId="fd3b1be1-b044-46bb-91fd-00c4f053137d" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,

  document.getElementById("root")
);
