import React from "react";
import { changePalette } from "../assets/theme";

export default function PaletteButton() {
  return (
    <button
      aria-label="Change theme"
      onClick={() => changePalette()}
      style={{ background: "transparent", border: "none" }}
      className="palette-button"
    >
      <i className="fas fa-palette fa-lg" />
    </button>
  );
}
