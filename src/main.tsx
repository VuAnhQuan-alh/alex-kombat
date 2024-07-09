import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { themeConfig } from "@/utils/theme.config.ts";
import App from "./App.tsx";
import React from "react";
import ReactDOM from "react-dom/client";
import { TelegramProvider } from "./context/telegram.context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={themeConfig}>
      <TelegramProvider>
        <App />
      </TelegramProvider>
    </ChakraProvider>
  </React.StrictMode>
);
