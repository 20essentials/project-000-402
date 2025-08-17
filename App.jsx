import React from "react";
import { createRoot } from "react-dom/client";
import { createStitches } from "@stitches/react";

const { styled, globalCss, keyframes } = createStitches();

const globalStyles = globalCss({
  "*": { boxSizing: "border-box", margin: 0, padding: 0, fontFamily: "sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue'" },
  "a": { WebkitTapHighlightColor: "transparent" },
  body: { height: "100vh", width: "100%", overflow: "hidden", backgroundColor: "#000" }
});

const rotarColor = keyframes({
  "0%": { "--linear-1": "45deg", "--linear-2": "135deg" },
  "100%": { "--linear-1": "405deg", "--linear-2": "495deg" }
});

const Rectangle = styled("aside", {
  position: "fixed",
  inset: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "#111",
  backgroundSize: "cover",
  backgroundPosition: "center",
  filter: "saturate(400%)",
  "&::before, &::after": {
    content: "''",
    position: "absolute",
    inset: "-5px",
    zIndex: -1,
    background: "linear-gradient(var(--linear-1), springgreen, violet, cyan), linear-gradient(var(--linear-2), springgreen, violet, cyan)",
    backgroundBlendMode: "darken",
    animation: `${rotarColor} 10s ease infinite both`
  },
  "&::after": {
    filter: "blur(30px)"
  }
});

function App() {
  globalStyles();
  return <Rectangle />;
}

const rootElement = document.createElement("div");
document.body.appendChild(rootElement);
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
