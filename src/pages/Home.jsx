import React from "react";
import { styled } from "../stitches.config";
import { Link } from "react-router-dom";
import home_bg from "../assets/images/home_bg.png";
import stump from "../assets/images/stump.png";
import redberry_logo from "../assets/images/redberry_logo.png";
import line from "../assets/images/line.png";

const Button = styled("button", {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "18px 60px",
  backgroundColor: "#000000",
  color: "#ffffff",
  fontSize: 20,
  cursor: "pointer",
  borderRadius: 8,
  "&:hover": {
    backgroundColor: "#232b2b",
  },
});

export default function Home() {
  document.body.style.backgroundImage = `url(${home_bg}), url(${stump}), url(${line}), url(${redberry_logo})`;
  document.body.style.backgroundRepeat = `no-repeat`;
  document.body.style.backgroundPosition = `0 0, 1076px 473px, 70px 89px, 70px 25px`;

  return (
    <Link to="/personal">
      <Button>რეზიუმეს დამატება</Button>
    </Link>
  );
}
