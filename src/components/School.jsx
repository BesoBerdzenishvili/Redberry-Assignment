import React, { useEffect, useState } from "react";
import { styled } from "../stitches.config";
import Input from "./Input";

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
    paddingRight: 16,
    color: "rgba(0, 0, 0, 0.6)",
    fontSize: 19,
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
    color: "rgba(0, 0, 0, 0.6)",
  },

  "& .mobile": {
    display: "block",
    marginTop: 8,
  },
});

export default function School({
  education,
  educations,
  setEducations,
  errors,
  setErrors,
  index,
}) {
  const [degrees, setDegrees] = useState([]);
  useEffect(() => {
    fetch("https://resume.redberryinternship.ge/api/degrees")
      .then((response) => response.json())
      .then((data) => setDegrees(data));
  }, []);

  const changeInstitute = (e) => {
    if (e.target.value.length < 2) {
      setErrors(
        errors.map((i) => {
          if (i.id === index + 1) {
            return { ...i, institute: "red" };
          } else {
            return i;
          }
        })
      );
    } else if (e.target.value.length > 1) {
      setErrors(
        errors.map((i) => {
          if (i.id === index + 1) {
            return { ...i, institute: "green" };
          } else {
            return i;
          }
        })
      );
    }
    setEducations(
      educations.map((i) => {
        if (i.id === education.id) {
          return { ...i, institute: e.target.value };
        } else {
          return i;
        }
      })
    );
  };
  const changeDegree = (e) => {
    if (e.target.value.length < 1) {
      setErrors(
        errors.map((i) => {
          if (i.id === index + 1) {
            return { ...i, degree: "red" };
          } else {
            return i;
          }
        })
      );
    } else if (e.target.value.length > 0) {
      setErrors(
        errors.map((i) => {
          if (i.id === index + 1) {
            return { ...i, degree: "green" };
          } else {
            return i;
          }
        })
      );
    }
    setEducations(
      educations.map((i) => {
        if (i.id === education.id) {
          return { ...i, degree: e.target.value };
        } else {
          return i;
        }
      })
    );
  };
  const changeEndDate = (e) => {
    if (e.target.value.length < 1) {
      setErrors(
        errors.map((i) => {
          if (i.id === index + 1) {
            return { ...i, due_date: "red" };
          } else {
            return i;
          }
        })
      );
    } else if (e.target.value.length > 0) {
      setErrors(
        errors.map((i) => {
          if (i.id === index + 1) {
            return { ...i, due_date: "green" };
          } else {
            return i;
          }
        })
      );
    }
    setEducations(
      educations.map((i) => {
        if (i.id === education.id) {
          return { ...i, due_date: e.target.value };
        } else {
          return i;
        }
      })
    );
  };
  const changeDescription = (e) => {
    if (e.target.value.length < 1) {
      setErrors(
        errors.map((i) => {
          if (i.id === index + 1) {
            return { ...i, description: "red" };
          } else {
            return i;
          }
        })
      );
    } else if (e.target.value.length > 0) {
      setErrors(
        errors.map((i) => {
          if (i.id === index + 1) {
            return { ...i, description: "green" };
          } else {
            return i;
          }
        })
      );
    }
    setEducations(
      educations.map((i) => {
        if (i.id === education.id) {
          return { ...i, description: e.target.value };
        } else {
          return i;
        }
      })
    );
  };
  return (
    <Form>
      <br />
      <label>
        სასწავლებელი
        <br />
        <Input
          type="text"
          placeholder="სასწავლებელი"
          value={education.institute}
          onChange={changeInstitute}
          style={{ border: `1px solid ${errors[index].institute}` }}
          check={errors[index].institute}
        />
        <p>მინიმუმ 2 სიმბოლო</p>
      </label>
      <br />

      <FullName>
        <label>
          ხარისხი
          <br />
          <select value={education.degree} onChange={changeDegree}>
            {degrees.map((i) => (
              <option key={i.id} value={i.title}>
                {i.title}
              </option>
            ))}
          </select>
        </label>
        <label>
          დამთავრების რიცხვი
          <br />
          <Input
            type="date"
            placeholder="mm/dd/yyyy"
            className="fullname"
            value={education.due_date}
            onChange={changeEndDate}
            style={{ border: `1px solid ${errors[index].due_date}` }}
          />
        </label>
      </FullName>

      <br />
      <label>
        აღწერა
        <br />
        <textarea
          placeholder="განათლების აღწერა"
          className="aboutMe"
          value={education.description}
          onChange={changeDescription}
          style={{ border: `1px solid ${errors[index].description}` }}
        />
      </label>
    </Form>
  );
}
