import React from "react";
import { styled } from "../stitches.config";

const Container = styled("div", {
  display: "flex",
  maxWidth: 798,
  width: "100%",
  position: "absolute",
  bottom: 65,
  left: 150,

  border: "1px solid green",
});

export default function Footer({ children, one }) {
  return (
    <Container style={{ justifyContent: one ? "end" : "space-between" }}>
      {children}
    </Container>
  );
}
