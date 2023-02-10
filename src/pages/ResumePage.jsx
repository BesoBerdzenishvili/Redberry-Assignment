import { useContext } from "react";
import { ResumeContext } from "../contexts/resumeContext";
import { styled } from "../stitches.config";
import at from "../assets/images/at.png";
import phoneImg from "../assets/images/phone.png";
import logo from "../assets/images/logo.png";
import Organisation from "../components/Organisation";
import RefreshBtn from "../components/RefreshBtn";
import Popup from "../components/Popup";

const PageContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  paddingTop: 55,
});

const Container = styled("div", {
  border: "1px solid #000000",
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
  maxHeight: 246,
  borderRadius: "50%",
  objectFit: "cover",
});

export default function ResumePage() {
  const { resumeData } = useContext(ResumeContext);

  return (
    <PageContainer>
      <RefreshBtn />
      <Container>
        <Profile>
          <div>
            <FullName>
              {resumeData.name && resumeData.name}{" "}
              {resumeData.surname && resumeData.surname}
            </FullName>
            {resumeData.email && (
              <Contact>
                <img src={at} alt="at sign (a in circle)" /> {resumeData.email}
              </Contact>
            )}
            {resumeData.phone && (
              <Contact>
                <img src={phoneImg} alt="phone sign" /> {resumeData.phone}
              </Contact>
            )}
            {resumeData.about_me && <Subheader>ჩემ შესახებ</Subheader>}
            <p>{resumeData.about_me && resumeData.about_me}</p>
          </div>
          {resumeData.photo && <Img src={photo} alt="profile" />}
        </Profile>
        {resumeData.about_me && <Hr />}
        {resumeData.experiences.length > 0 && (
          <Subheader>გამოცდილება</Subheader>
        )}
        {resumeData.experiences &&
          resumeData.experiences.map((i) => (
            <Organisation
              key={i.id}
              position={i.position}
              organisation={i.employer}
              startDate={i.start_date}
              endDate={i.due_date}
              description={i.description}
            />
          ))}
        {resumeData.educations.length > 0 && (
          <>
            <Hr />
            <Subheader>განათლება</Subheader>
          </>
        )}
        {resumeData.educations &&
          resumeData.educations.map((i) => (
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
      <Popup />
    </PageContainer>
  );
}
