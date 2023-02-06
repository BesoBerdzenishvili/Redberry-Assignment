import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {},
});
export const globalStyles = globalCss({
  "*": { margin: 0, padding: 0, boxSizing: "border-box" },
  body: {
    "@fontFace": {
      fontFamily: "Helvetica",
      src: 'local("HelveticaNeue"), url("./assets/HelveticaNeue.ttc") format("ttc")',
    },
    fontFamily: "Helvetica",
  },
});
