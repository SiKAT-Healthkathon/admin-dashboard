"use client";

import { Poppins, Figtree } from "next/font/google";
import { createTheme, Shadows, ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface PaletteColor {
    "100"?: string;
    "200"?: string;
    "300"?: string;
    "400"?: string;
    "500"?: string;
    "600"?: string;
    "700"?: string;
    "800"?: string;
    "900"?: string;
  }

  interface Palette {
    neutrals: PaletteColor;
  }
  interface PaletteOptions {
    neutrals?: PaletteColor;
  }
}

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const figtree = Figtree({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#3A70FF", // Main color
      light: "#66A8FF", // Light variant - lighter shade of main
      dark: "#005BB5", // Dark variant - darker shade of main
      contrastText: "#FFFFFF", // Text color on primary
      "100": "#E1F0FF", // Very light shade
      "200": "#B3E0FF", // Light shade
      "300": "#80C0FF", // Mid-light shade
      "400": "#66A8FF", // Slightly darker light shade
      "500": "#3A70FF", // Main
      "600": "#0072E5", // Darker variant of main
      "700": "#005BB5", // Dark variant
      "800": "#003D7A", // Very dark variant
      "900": "#002B55", // Deep dark variant
    },

    secondary: {
      main: "#6226EF",
      light: "#EFA537",
      dark: "#6F4609",
      contrastText: "#FFFFFF",
      "100": "#FCEDD7",
      "200": "#F9DBAF",
      "300": "#F5C987",
      "400": "#F2B75F",
      "500": "#EFA537",
      "600": "#E79213",
      "700": "#BF7910",
      "800": "#975F0C",
      "900": "#593807",
    },
    neutrals: {
      main: "#908B8B",
      light: "#FFFFFF",
      dark: "#000000",
      contrastText: "#000000",
      "100": "#E4E4E4",
      "200": "#CFCECE",
      "300": "#BAB8B8",
      "400": "#A5A1A1",
      "500": "#908B8B",
      "600": "#7A7474",
      "700": "#655F5F",
      "800": "#4E4949",
      "900": "#383434",
    },
    error: {
      light: "#FFB6B6",
      main: "#FF6D6D",
      dark: "#CA0000",
      contrastText: "#FFFFFF",
    },
    warning: {
      light: "#FFE6AA",
      main: "#FFCC55",
      dark: "#B37D00",
      contrastText: "#FFFFFF",
    },
    success: {
      light: "#AFEEB8",
      main: "#5EDD72",
      dark: "#1B7F2A",
      contrastText: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: `${figtree.style.fontFamily}, ${poppins.style.fontFamily}, sans-serif`,
    button: {
      textTransform: "none",
    },
  },
  shadows: [
    "none",
    "5px 5px 10px 0px rgba(0, 0, 0, 0.3)",
    "3px 0px 12px 0px rgba(32, 145, 255, 0.13)",
    ...Array(20).fill("none"),
  ] as Shadows,
};

const theme = createTheme(themeOptions);

export default theme;
