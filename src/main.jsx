import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a202c", // Black
    800: "#2d3748", // Dark Gray
    700: "#4a5568", // Gray
    600: "#718096", // Light Gray
    500: "#38a169", // Green
    400: "#48bb78", // Light Green
    300: "#f6e05e", // Yellow
    200: "#ecc94b", // Light Yellow
    100: "#ed8936", // Orange
    50: "#f6ad55",  // Light Orange
  },
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
