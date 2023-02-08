import { useContext } from "react";
import { styled } from "../stitches.config";
import { Link } from "react-router-dom";
import { ResumeContext } from "../contexts/resumeContext";
import vector from "../assets/images/vector.png";

const HeaderContainer = styled("header", {
  position: "relative",
  left: 0,
  top: 0,
});

const Container = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: 941,
  fontFamily: "Helvetica Neue",
  fontStyle: "normal",
  color: "#1A1A1A",
  padding: "47px 0 12px 0",
});

const InnerContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const Img = styled("img", {
  cursor: "pointer",
  margin: "0 77px 0 62px",
});

const PageTitle = styled("p", {
  fontFamily: "Helvetica Neue",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: 24,
});

const PageNumber = styled("p", {
  fontFamily: "Helvetica Neue",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: 20,
});
const Hr = styled("hr", {
  border: "1px solid black",
  width: 798,
  marginLeft: 150,
});

export default function Header({ pageTitle, pageNumber }) {
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
    <HeaderContainer>
      <Container>
        <InnerContainer>
          <Link to="/">
            <Img src={vector} alt="left arrow" onClick={handleClick} />
          </Link>
          <PageTitle>{pageTitle}</PageTitle>
        </InnerContainer>
        <PageNumber>{pageNumber}/3</PageNumber>
      </Container>
      <Hr />
    </HeaderContainer>
  );
}
