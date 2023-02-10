import { useContext } from "react";
import { ResumeContext } from "../contexts/resumeContext";
import { styled } from "../stitches.config";
import at from "../assets/images/at.png";
import phone from "../assets/images/phone.png";
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
              {resumeData.firstName && resumeData.firstName}{" "}
              {resumeData.lastName && resumeData.lastName}
            </FullName>
            {resumeData.email && (
              <Contact>
                <img src={at} alt="at sign (a in circle)" /> {resumeData.email}
              </Contact>
            )}
            {resumeData.mobile && (
              <Contact>
                <img src={phone} alt="phone sign" /> {resumeData.mobile}
              </Contact>
            )}
            {resumeData.aboutMe && <Subheader>ჩემ შესახებ</Subheader>}
            <p>{resumeData.aboutMe && resumeData.aboutMe}</p>
          </div>
          {resumeData.photo && <Img src={photo} alt="profile" />}
        </Profile>
        {resumeData.aboutMe && <Hr />}
        {resumeData.job.length > 0 && <Subheader>გამოცდილება</Subheader>}
        {resumeData.job &&
          resumeData.job.map((i) => (
            <Organisation
              key={i.id}
              position={i.position}
              organisation={i.employer}
              startDate={i.startDate}
              endDate={i.endDate}
              description={i.description}
            />
          ))}
        {resumeData.educationalInstitute.length > 0 && (
          <>
            <Hr />
            <Subheader>განათლება</Subheader>
          </>
        )}
        {resumeData.educationalInstitute &&
          resumeData.educationalInstitute.map((i) => (
            <Organisation
              key={i.id}
              position={i.school}
              organisation={i.degree}
              endDate={i.endDate}
              description={i.description}
            />
          ))}

        <img src={logo} alt="star in red circle" className="redCircle" />
      </Container>
      <Popup />
    </PageContainer>
  );
}
