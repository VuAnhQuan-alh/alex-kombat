import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { themeConfig } from "@/utils/theme.config.ts";
import App from "./App.tsx";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={themeConfig}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
