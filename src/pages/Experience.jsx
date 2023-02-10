import React, { useContext } from "react";
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
  const { job, setJob } = useContext(ResumeContext);

  const handleClick = () => {
    setJob([
      ...job,
      {
        id: job.length + 1,
        position: "",
        employer: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };

  return (
    <Container>
      <LeftContainer>
        <RefreshBtn />
        <Header pageNumber="2" pageTitle="გამოცდილება" />

        {job.map((i, index) => (
          <Job job={job[index]} jobs={job} setJob={setJob} key={i.id} />
        ))}

        <Hr />

        <Button variant="addBtn" onClick={handleClick}>
          მეტი გამოცდილების დამატება
        </Button>
        <Footer>
          <Link to="/personal">
            <Button variant="nextPrevBtn">უკან</Button>
          </Link>

          <Link to="/education">
            <Button variant="nextPrevBtn">შემდეგი</Button>
          </Link>
        </Footer>
      </LeftContainer>
      <Resume />
    </Container>
  );
}
