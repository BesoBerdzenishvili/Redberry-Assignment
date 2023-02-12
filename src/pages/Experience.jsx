import React, { useContext, useEffect, useState } from "react";
import { styled } from "../stitches.config";
import { Link } from "react-router-dom";
import { ResumeContext } from "../contexts/resumeContext";
import Resume from "../components/Resume";
import RefreshBtn from "../components/RefreshBtn";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Button from "../components/Button";
import Job from "../components/Job";

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

export default function Experience() {
  const [restricted, setRestricted] = useState(true);
  const [errors, setErrors] = useState([
    {
      id: 1,
      position: "#BCBCBC",
      employer: "#BCBCBC",
      start_date: "#BCBCBC",
      due_date: "#BCBCBC",
      description: "#BCBCBC",
    },
  ]);
  const { experiences, setExperiences } = useContext(ResumeContext);

  const handleClick = () => {
    setExperiences([
      ...experiences,
      {
        id: experiences.length + 1,
        position: "",
        employer: "",
        start_date: "",
        due_date: "",
        description: "",
      },
    ]);
    setErrors([
      ...errors,
      {
        id: errors.length + 1,
        position: "#BCBCBC",
        employer: "#BCBCBC",
        start_date: "#BCBCBC",
        due_date: "#BCBCBC",
        description: "#BCBCBC",
      },
    ]);
  };

  const checkRestricted = () => {
    if (
      errors.some(
        (i) =>
          i.position === "red" ||
          i.employer === "red" ||
          i.start_date === "red" ||
          i.due_date === "red" ||
          i.description === "red"
      )
    ) {
      setRestricted(true);
    } else {
      setRestricted(false);
    }
  };
  useEffect(() => {
    checkRestricted();
  }, [errors]);

  return (
    <Container>
      <LeftContainer>
        <RefreshBtn />
        <Header pageNumber="2" pageTitle="ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ" />

        {experiences.map((i, index) => (
          <Job
            experience={experiences[index]}
            experiences={experiences}
            setExperiences={setExperiences}
            key={i.id}
            errors={errors}
            setErrors={setErrors}
            index={index}
          />
        ))}

        <Hr />

        <Button variant="addBtn" onClick={handleClick}>
          მეტი გამოცდილების დამატება
        </Button>
        <Footer>
          <Link to="/personal">
            <Button variant="nextPrevBtn">ᲣᲙᲐᲜ</Button>
          </Link>

          <Link to={!restricted ? "/education" : "/experience"}>
            <Button variant="nextPrevBtn">ᲨᲔᲛᲓᲔᲒᲘ</Button>
          </Link>
        </Footer>
      </LeftContainer>
      <Resume />
    </Container>
  );
}
