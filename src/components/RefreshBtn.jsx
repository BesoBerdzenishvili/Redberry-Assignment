import { styled } from "../stitches.config";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ResumeContext } from "../contexts/resumeContext";
import vector from "../assets/images/vector.png";

const Img = styled("img", {
  cursor: "pointer",
  margin: "0 77px 0 62px",
  position: "absolute",
  top: 57,
  left: 0,
});

export default function RefreshBtn() {
  const {
    setFirstName,
    setLastName,
    setPhoto,
    setAboutMe,
    setEmail,
    setMobile,
    setJob,
    setEducationalInstitute,
  } = useContext(ResumeContext);

  const handleClick = () => {
    setFirstName("");
    setLastName("");
    setPhoto("");
    setAboutMe("");
    setEmail("");
    setMobile("");
    setJob([]);
    setEducationalInstitute([]);
  };
  return (
    <Link to="/">
      <Img src={vector} alt="left arrow" onClick={handleClick} />
    </Link>
  );
}
