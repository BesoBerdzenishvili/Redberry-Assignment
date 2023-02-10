import React, { useContext } from "react";
import { styled } from "../stitches.config";
import { Link } from "react-router-dom";
import { ResumeContext } from "../contexts/resumeContext";
import Resume from "../components/Resume";
import RefreshBtn from "../components/RefreshBtn";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Button from "../components/Button";
import School from "../components/School";

const Container = styled("div", {
  position: "relative",
  display: "flex",
  padding: "47px 0 0 149px",
});
const LeftContainer = styled("div", {
  marginRight: 150,
  maxWidth: 798,
  width: "100%",
  paddingBottom: 155,

  border: "1px solid magenta",
});

const Hr = styled("div", {
  border: "1px solid #C1C1C1",
  margin: "50px 0",
});

export default function Education() {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    photo,
    setPhoto,
    aboutMe,
    setAboutMe,
    email,
    setEmail,
    mobile,
    setMobile,
    job,
    setJob,
    educationalInstitute,
    setEducationalInstitute,
    setResumeData,
  } = useContext(ResumeContext);

  const handleClick = () => {
    setEducationalInstitute([
      ...educationalInstitute,
      {
        id: educationalInstitute.length + 1,
        position: "",
        employer: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };

  const handleFinish = () => {
    const data = {
      firstName: firstName,
      lastName: lastName,
      photo: photo,
      aboutMe: aboutMe,
      email: email,
      mobile: mobile,
      job: job,
      educationalInstitute: educationalInstitute,
    };
    setResumeData(data);

    async () => {
      try {
        const response = await fetch(
          "https://resume.redberryinternship.ge/api/cvs",
          {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const json = await response.json();

        if (!response.ok) {
          console.log(json.message);
        }
      } catch (e) {
        console.log(e?.message ?? "Something went wrong");
      }
    };

    setFirstName("");
    setLastName("");
    setPhoto("");
    setAboutMe("");
    setEmail("");
    setMobile("");
    setJob([
      {
        id: 1,
        position: "",
        employer: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
    setEducationalInstitute([
      { id: 1, school: "", degree: "", endDate: "", description: "" },
    ]);
  };

  return (
    <Container>
      <LeftContainer>
        <RefreshBtn />
        <Header pageNumber="3" pageTitle="განათლება" />

        {educationalInstitute.map((i, index) => (
          <School
            educationalInstitute={educationalInstitute[index]}
            educationalInstitutes={educationalInstitute}
            setEducationalInstitute={setEducationalInstitute}
            key={i.id}
          />
        ))}

        <Hr />

        <Button variant="addBtn" onClick={handleClick}>
          სხვა სასწავლებლის დამატება
        </Button>
        <Footer>
          <Link to="/experience">
            <Button variant="nextPrevBtn">უკან</Button>
          </Link>

          <Link to="/resume" onClick={handleFinish}>
            <Button variant="nextPrevBtn">დასრულება</Button>
          </Link>
        </Footer>
      </LeftContainer>
      <Resume />
    </Container>
  );
}
