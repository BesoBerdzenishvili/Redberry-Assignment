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
    setName,
    setSurname,
    setImage,
    setAboutMe,
    setEmail,
    setPhone,
    setExperiences,
    setEducations,
  } = useContext(ResumeContext);

  const handleClick = () => {
    setName("");
    setSurname("");
    setImage("");
    setAboutMe("");
    setEmail("");
    setPhone("");
    setExperiences([
      {
        id: 1,
        position: "",
        employer: "",
        start_date: "",
        due_date: "",
        description: "",
      },
    ]);
    setEducations([
      { id: 1, institute: "", degree: "", due_date: "", description: "" },
    ]);
  };
  return (
    <Link to="/">
      <Img src={vector} alt="left arrow" onClick={handleClick} />
    </Link>
  );
}
