import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#0D0D0D", // Black
    800: "#1A1A1A", // Dark Gray
    700: "#333333", // Gray
    600: "#4D4D4D", // Light Gray
    500: "#00A86B", // Green
    400: "#32CD32", // Light Green
    300: "#FFD700", // Yellow
    200: "#FFEC8B", // Light Yellow
    100: "#FF8C00", // Orange
    50: "#FFA500",  // Light Orange
  },
};

const styles = {
  global: {
    "html, body": {
      backgroundColor: "brand.900",
      color: "white",
      fontFamily: "'Roboto', sans-serif",
    },
    a: {
      color: "brand.300",
      _hover: {
        textDecoration: "underline",
      },
    },
    button: {
      _hover: {
        transform: "scale(1.05)",
        transition: "all 0.2s ease-in-out",
      },
    },
  },
};

const theme = extendTheme({ colors, styles });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);