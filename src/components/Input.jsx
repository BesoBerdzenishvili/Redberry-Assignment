import React from "react";
import { styled } from "../stitches.config";
import check from "../assets/images/check.png";
import error from "../assets/images/error.png";

const Container = styled("div", {
  position: "relative",
});

const StyledInput = styled("input", {});

const CheckImg = styled("img", {
  position: "absolute",
  left: "96%",
  top: "35%",
  variants: {
    short: {
      true: {
        left: "91.5%",
      },
    },
  },
});
const ErrorImg = styled("img", {
  position: "absolute",
  left: "102%",
  top: "35%",
});
export default function Input(props) {
  return (
    <Container>
      <StyledInput {...props} />
      {props.check === "green" && (
        <CheckImg short={props.short} src={check} alt="check" />
      )}
      {props.check === "red" && (
        <ErrorImg src={error} alt="exclamation mark inside a red triangle" />
      )}
    </Container>
  );
}
