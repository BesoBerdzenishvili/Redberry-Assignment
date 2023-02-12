import React, { useContext, useState, useEffect } from "react";
import { styled } from "../stitches.config";
import { ResumeContext } from "../contexts/resumeContext";
import { Link } from "react-router-dom";
import Resume from "../components/Resume";
import RefreshBtn from "../components/RefreshBtn";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Button from "../components/Button";
import Input from "../components/Input";

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
    borderRadius: 4,
    paddingLeft: 16,
    fontSize: 16,
    width: "100%",
    margin: "8px 0",
  },

  "& textarea:focus, input:focus": {
    outline: "none",
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
  const [restricted, setRestricted] = useState(true);
  const [errors, setErrors] = useState({
    name: "#BCBCBC",
    surname: "#BCBCBC",
    image: "#BCBCBC",
    aboutMe: "#BCBCBC",
    email: "#BCBCBC",
    phone: "#BCBCBC",
    // restriction: "red",
  });
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
  } = useContext(ResumeContext);

  var georgian = /^[ა-ჰ0-9]*$/;
  const changeName = (e) => {
    if (e.target.value.length < 2 && !georgian.test(e.target.value)) {
      setErrors({
        ...errors,
        name: "red",
      });
    } else if (e.target.value.length > 1 && georgian.test(e.target.value)) {
      setErrors({
        ...errors,
        name: "green",
      });
    }

    setName(e.target.value);
  };
  const changeSurname = (e) => {
    if (e.target.value.length < 2 && !georgian.test(e.target.value)) {
      setErrors({
        ...errors,
        surname: "red",
      });
    } else if (e.target.value.length > 1 && georgian.test(e.target.value)) {
      setErrors({
        ...errors,
        surname: "green",
      });
    }
    setSurname(e.target.value);
  };
  const changeImage = (e) => {
    if (e.target.value.length) {
      setErrors({
        ...errors,
        image: "green",
      });
    }
    // const [file] = e.target.files;
    setImage(URL.createObjectURL(e.target.files[0]));
  };
  const changeAboutMe = (e) => {
    if (e.target.value.length) {
      setErrors({
        ...errors,
        aboutMe: "green",
      });
    }
    setAboutMe(e.target.value);
  };
  const changeEmail = (e) => {
    if (e.target.value.length && e.target.value.endsWith("@redberry.ge")) {
      setErrors({
        ...errors,
        email: "green",
      });
    } else {
      setErrors({
        ...errors,
        email: "red",
      });
    }
    setEmail(e.target.value);
  };
  const validatePhone = (number) => {
    if (
      number.length === 17 &&
      number.startsWith("+995 5") &&
      number.indexOf(" ") === 4 &&
      number.lastIndexOf(" ") === 14 &&
      number.indexOf(" ", 7) === 8 &&
      number.indexOf(" ", 10) === 11
    ) {
      return true;
    }
  };
  const changePhone = (e) => {
    if (e.target.value.length && validatePhone(e.target.value)) {
      setErrors({
        ...errors,
        phone: "green",
      });
    } else {
      setErrors({
        ...errors,
        phone: "red",
      });
    }
    setPhone(e.target.value);
  };

  const checkRestricted = () => {
    const error = Object.values(errors);
    if (error.some((i) => i === "red")) {
      setRestricted(true);
    } else {
      setRestricted(false);
    }
  };
  useEffect(() => {
    checkRestricted();
  }, [errors]);

  // const checkValidation = () => {
  //   if (name || surname || image || email || phone) {
  //     setErrors({
  //       ...errors,
  //       restriction: "green",
  //     });
  //   }
  // };

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
              <Input
                type="text"
                placeholder="ანზორ"
                className="fullname"
                value={name}
                onChange={changeName}
                style={{ border: `1px solid ${errors.name}` }}
                check={errors.name}
                short
              />
              <p>მინიმუმ 2 ასო, ქართული ასოები</p>
            </label>
            <label>
              გვარი
              <br />
              <Input
                type="text"
                placeholder="მუმლაძე"
                className="fullname"
                value={surname}
                onChange={changeSurname}
                style={{ border: `1px solid ${errors.surname}` }}
                check={errors.surname}
                short
              />
              <p>მინიმუმ 2 ასო, ქართული ასოები</p>
            </label>
          </FullName>
          <label className="photoLabel">
            პირადი ფოტოს ატვირთვა
            <Input type="file" className="photo" onChange={changeImage} />
          </label>
          <br />
          <label>
            ჩემ შესახებ (არასავალდებულო)
            <br />
            <textarea
              placeholder="ზოგადი ინფო შენ შესახებ"
              className="aboutMe"
              value={aboutMe}
              onChange={changeAboutMe}
              style={{ border: `1px solid ${errors.aboutMe}` }}
            />
          </label>
          <br />
          <label>
            ელ.ფოსტა
            <br />
            <Input
              type="email"
              placeholder="anzorr666@redberry.ge"
              value={email}
              onChange={changeEmail}
              style={{ border: `1px solid ${errors.email}` }}
              check={errors.email}
            />
            <p>უნდა მთავრდებოდეს @redberry.ge-ით</p>
          </label>
          <br />
          <label className="mobile">
            მობილურის ნომერი
            <br />
            <Input
              type="tel"
              placeholder="+995 551 12 34 56"
              value={phone}
              onChange={changePhone}
              style={{ border: `1px solid ${errors.phone}` }}
              check={errors.phone}
            />
            <p>უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</p>
          </label>
        </Form>
        <Footer one>
          <Link
            to={!restricted ? "/experience" : "/personal"}
            // onClick={checkValidation}
          >
            <Button variant="nextPrevBtn">შემდეგი</Button>
          </Link>
        </Footer>
      </LeftContainer>
      <Resume />
    </Container>
  );
}
