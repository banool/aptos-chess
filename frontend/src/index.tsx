import { ColorModeScript } from "@chakra-ui/react";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { App } from "./App";
import { Buffer as BufferPolyFill } from "buffer";

// Needed for IdentityConnectWallet for now.
// https://aptos-org.slack.com/archives/C057G4U6RAB/p1690526344354569
window.Buffer = BufferPolyFill;

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(container);

// See here for why we might not use StrictMode:
// https://github.com/Clariity/react-chessboard/issues/119#issuecomment-1867683441
root.render(
  <>
    <ColorModeScript />
    <App />
  </>,
);

/*
root.render(
  <React.StrictMode>
    <ColorModeScript />
    <App />
  </React.StrictMode>
);
*/
