import { useContext } from "react";
import { ResumeContext } from "../contexts/resumeContext";
import { styled } from "../stitches.config";
import at from "../assets/images/at.png";
import phoneImg from "../assets/images/phone.png";
import logo from "../assets/images/logo.png";
import Organisation from "./Organisation";

const Container = styled("div", {
  border: "1px solid green",
  position: "relative",

  maxWidth: 822,
  width: "100%",
  minHeight: 1080,
  padding: "40px 80px 120px 80px",

  "& .redCircle": {
    position: "absolute",
    bottom: 44,
  },
});

const Profile = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  border: "1px solid magenta",
});

const FullName = styled("p", {
  fontWeight: 700,
  fontSize: 34,
  color: "#F93B1D",
});

const Contact = styled("p", {
  fontWeight: 400,
  fontSize: 18,
  color: "#1A1A1A",
  marginTop: 10,
  display: "flex",

  "& img": {
    marginRight: 11,
  },
});

const Subheader = styled("p", {
  color: "#F93B1D",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: 18,
  margin: "25px 0",
});

const Hr = styled("hr", {
  marginTop: 25,
});

const Img = styled("img", {
  maxWidth: 246,
  minHeight: 246,
  borderRadius: "50%",
  objectFit: "cover",
  // position: "relative",
  // left: 0,
  // top: 0,
});

export default function Resume() {
  const {
    name,
    surname,
    image,
    aboutMe,
    email,
    phone,
    experiences,
    educations,
  } = useContext(ResumeContext);

  return (
    <Container>
      <Profile>
        <div>
          <FullName>
            {name && name} {surname && surname}
          </FullName>
          {email && (
            <Contact>
              <img src={at} alt="at sign (a in circle)" /> {email}
            </Contact>
          )}
          {phone && (
            <Contact>
              <img src={phoneImg} alt="phone sign" /> {phone}
            </Contact>
          )}
          {aboutMe && <Subheader>ჩემ შესახებ</Subheader>}
          <p>{aboutMe && aboutMe}</p>
        </div>
        {image && <Img src={image} alt="profile" />}
      </Profile>
      {aboutMe && <Hr />}
      {experiences.length > 0 && <Subheader>გამოცდილება</Subheader>}
      {experiences &&
        experiences.map((i) => (
          <Organisation
            key={i.id}
            position={i.position}
            organisation={i.employer}
            startDate={i.start_date}
            endDate={i.due_date}
            description={i.description}
          />
        ))}
      {educations.length > 0 && (
        <>
          <Hr />
          <Subheader>განათლება</Subheader>
        </>
      )}
      {educations &&
        educations.map((i) => (
          <Organisation
            key={i.id}
            position={i.institute}
            organisation={i.degree}
            endDate={i.due_date}
            description={i.description}
          />
        ))}

      <img src={logo} alt="star in red circle" className="redCircle" />
    </Container>
  );
}
