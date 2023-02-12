import React, { useContext } from "react";
import { styled } from "../stitches.config";
import { Link } from "react-router-dom";
import { ResumeContext } from "../contexts/resumeContext";
import home_bg from "../assets/images/home_bg.png";
import stump from "../assets/images/stump.png";
import redberry_logo from "../assets/images/redberry_logo.png";
import line from "../assets/images/line.png";

const Container = styled("div", {
  backgroundImage: `url(${home_bg}), url(${stump}), url(${line})`,
  backgroundRepeat: `no-repeat`,
  backgroundPosition: `0 0, 1076px 473px, 70px 89px`,
  opacity: 1,
  width: 1920,
  height: 1080,
});

const RedberryLogo = styled("img", {
  position: "relative",
  left: 70,
  top: 25,
});

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
  const { setResumeData } = useContext(ResumeContext);

  const handleClick = () => {
    setResumeData({});
  };

  return (
    <Container>
      <RedberryLogo
        src={redberry_logo}
        alt='text: "redberry" with red letters'
      />
      <Link to="/personal" onClick={handleClick}>
        <Button>რეზიუმეს დამატება</Button>
      </Link>
    </Container>
  );
}
