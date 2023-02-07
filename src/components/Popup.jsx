import { useState } from "react";
import { styled } from "../stitches.config";
import x from "../assets/images/x.png";

const Conrainer = styled("div", {
  padding: "28px 30px 30px",

  width: "427px",
  height: "167px",

  background: "#FFFFFF",
  border: "1px solid #E4E4E4",
  boxShadow: "0px 4px 28px rgba(0, 0, 0, 0.25)",
  borderRadius: 8,

  fontStyle: "normal",
  fontWeight: 500,
  fontSize: 28,
  color: "#1A1A1A",
});

const Img = styled("img", {
  position: "relative",
  right: -188,
  top: -64,
  cursor: "pointer",
});

export default function Popup() {
  const [show, setShow] = useState(true);
  const toggleShow = () => {
    setShow(false);
  };
  return (
    <Conrainer style={{ display: !show && "none" }}>
      რეზიუმე წარმატებით გაიგზავნა 🎉
      <Img src={x} alt="x" onClick={toggleShow} />
    </Conrainer>
  );
}
