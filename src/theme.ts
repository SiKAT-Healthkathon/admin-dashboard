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
      main: "#3A70FF",
      light: "#FF3AB5",
      dark: "#7F0050",
      contrastText: "#FFFFFF",
      "100": "#FFD8F0",
      "200": "#FFB0E2",
      "300": "#FF89D3",
      "400": "#FF62C4",
      "500": "#FF3AB5",
      "600": "#FF13A7",
      "700": "#EA0093",
      "800": "#A10065",
      "900": "#7F0050",
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
