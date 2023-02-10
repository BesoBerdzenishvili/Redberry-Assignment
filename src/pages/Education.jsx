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
    name,
    setName,
    surname,
    setSurname,
    image,
    setImage,
    aboutMe,
    setAboutMe,
    email,
    setEmail,
    phone,
    setPhone,
    experiences,
    setExperiences,
    educations,
    setEducations,
    setResumeData,
  } = useContext(ResumeContext);

  const handleClick = () => {
    setEducations([
      ...educations,
      {
        id: educations.length + 1,
        institute: "",
        degree: "",
        due_date: "",
        description: "",
      },
    ]);
  };

  const handleFinish = () => {
    const data = {
      name: name,
      surname: surname,
      image: image,
      about_me: aboutMe,
      email: email,
      phone: phone,
      experiences: experiences,
      educations: educations,
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
    <Container>
      <LeftContainer>
        <RefreshBtn />
        <Header pageNumber="3" pageTitle="განათლება" />

        {educations.map((i, index) => (
          <School
            education={educations[index]}
            educations={educations}
            setEducations={setEducations}
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
