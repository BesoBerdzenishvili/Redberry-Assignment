import React, { useContext } from "react";
import { styled } from "../stitches.config";
import { ResumeContext } from "../contexts/resumeContext";
import { Link } from "react-router-dom";
import Resume from "../components/Resume";
import RefreshBtn from "../components/RefreshBtn";
import Header from "../components/Header";
import Footer from "../layout/Footer";
import Button from "../components/Button";

const Container = styled("div", {
  position: "relative",
  display: "flex",
  padding: "47px 0 0 149px",
});
const LeftContainer = styled("div", {
  marginRight: 150,
  maxWidth: 798,
  width: "100%",

  border: "1px solid magenta",
});
const FullName = styled("div", {
  display: "flex",
  justifyContent: "space-between",
});
const Form = styled("form", {
  width: "100%",
  margin: "77px 150px 0 0",

  border: "1px solid orange",

  "& input": {
    height: 48,
    border: "1px solid #BCBCBC",
    borderRadius: 4,
    paddingLeft: 16,
    fontSize: 16,
    width: "100%",
    margin: "8px 0",
  },

  "& .fullname": {
    width: 371,
  },

  "& .photo": {
    display: "block",
    color: "transparent",
    border: "none",
  },

  "& .photo::-webkit-file-upload-button": {
    visibility: "hidden",
  },

  "& .photo::before": {
    content: "ატვირთვა",
    color: "#ffffff",
    backgroundColor: "#0E80BF",
    display: "inline-block",
    padding: "4px 15px",
    borderRadius: 4,
    cursor: "pointer",
    marginTop: 10,
  },

  "& .photoLabel": {
    display: "flex",
    alignItems: "center",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",

    border: "1px solid magenta",
  },

  "& .aboutMe": {
    border: "1px solid #BCBCBC",
    borderRadius: 4,
    padding: "10px 0 0 16px ",
    fontSize: 16,
    width: "100%",
    margin: "8px 0 33px 0",
    minHeight: 103,
  },

  "& label": {
    marginTop: 55,
    fontWeight: "bolder",
  },

  "& p": {
    fontWeight: 300,
    fontSize: 14,
  },

  "& .mobile": {
    display: "block",
    marginTop: 8,
  },
});

export default function Personal() {
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
  } = useContext(ResumeContext);

  const handleImgChange = (e) => {
    const [file] = e.target.files;
    setPhoto(URL.createObjectURL(file));
  };

  return (
    <Container>
      <LeftContainer>
        <RefreshBtn />
        <Header pageNumber="1" pageTitle="პირადი ინფო" />
        <Form>
          <FullName>
            <label>
              სახელი
              <br />
              <input
                type="text"
                placeholder="ანზორ"
                className="fullname"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <p>მინიმუმ 2 ასო, ქართული ასოები</p>
            </label>
            <label>
              გვარი
              <br />
              <input
                type="text"
                placeholder="მუმლაძე"
                className="fullname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <p>მინიმუმ 2 ასო, ქართული ასოები</p>
            </label>
          </FullName>
          <label className="photoLabel">
            პირადი ფოტოს ატვირთვა
            <input
              type="file"
              className="photo"
              value={photo}
              onChange={handleImgChange}
            />
          </label>
          <br />
          <label>
            ჩემ შესახებ (არასავალდებულო)
            <br />
            <textarea
              placeholder="ზოგადი ინფო შენ შესახებ"
              className="aboutMe"
              value={aboutMe}
              onChange={(e) => setAboutMe(e.target.value)}
            />
          </label>
          <br />
          <label>
            ელ.ფოსტა
            <br />
            <input
              type="email"
              placeholder="anzorr666@redberry.ge"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p>უნდა მთავრდებოდეს @redberry.ge-ით</p>
          </label>
          <br />
          <label className="mobile">
            მობილურის ნომერი
            <br />
            <input
              type="tel"
              placeholder="+995 551 12 34 56"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <p>უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</p>
          </label>
        </Form>
        <Footer one>
          <Link to="/experience">
            <Button variant="nextPrevBtn">შემდეგი</Button>
          </Link>
        </Footer>
      </LeftContainer>
      <Resume />
    </Container>
  );
}
