import React from "react";
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

export default function Job({
  experience,
  experiences,
  setExperiences,
  errors,
  setErrors,
  index,
}) {
  const changePosition = (e) => {
    if (e.target.value.length < 2) {
      setErrors(
        errors.map((i) => {
          if (i.id === index + 1) {
            return { ...i, position: "red" };
          } else {
            return i;
          }
        })
      );
    } else if (e.target.value.length > 1) {
      setErrors(
        errors.map((i) => {
          if (i.id === index + 1) {
            return { ...i, position: "green" };
          } else {
            return i;
          }
        })
      );
    }
    setExperiences(
      experiences.map((i) => {
        if (i.id === experience.id) {
          return { ...i, position: e.target.value };
        } else {
          return i;
        }
      })
    );
  };
  const changeEmployer = (e) => {
    if (e.target.value.length < 2) {
      setErrors(
        errors.map((i) => {
          if (i.id === index + 1) {
            return { ...i, employer: "red" };
          } else {
            return i;
          }
        })
      );
    } else if (e.target.value.length > 1) {
      setErrors(
        errors.map((i) => {
          if (i.id === index + 1) {
            return { ...i, employer: "green" };
          } else {
            return i;
          }
        })
      );
    }
    setExperiences(
      experiences.map((i) => {
        if (i.id === experience.id) {
          return { ...i, employer: e.target.value };
        } else {
          return i;
        }
      })
    );
  };
  const changeStartDate = (e) => {
    if (e.target.value.length > 0) {
      setErrors(
        errors.map((i) => {
          if (i.id === index + 1) {
            return { ...i, start_date: "green" };
          } else {
            return i;
          }
        })
      );
    }
    setExperiences(
      experiences.map((i) => {
        if (i.id === experience.id) {
          return { ...i, start_date: e.target.value };
        } else {
          return i;
        }
      })
    );
  };
  const changeEndDate = (e) => {
    if (e.target.value.length > 0) {
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
    setExperiences(
      experiences.map((i) => {
        if (i.id === experience.id) {
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
    setExperiences(
      experiences.map((i) => {
        if (i.id === experience.id) {
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
        თანამდებობა
        <br />
        <Input
          type="text"
          placeholder="დეველოპერი, დიზაინერი, ა.შ."
          value={experience.position}
          onChange={changePosition}
          style={{ border: `1px solid ${errors[index].position}` }}
          check={errors[index].position}
        />
        <p>მინიმუმ 2 სიმბოლო</p>
      </label>
      <br />
      <label className="text">
        დამსაქმებელი
        <br />
        <Input
          type="tel"
          placeholder="დამსაქმებელი"
          value={experience.employer}
          onChange={changeEmployer}
          style={{ border: `1px solid ${errors[index].employer}` }}
          check={errors[index].employer}
        />
        <p>მინიმუმ 2 სიმბოლო</p>
      </label>

      <FullName>
        <label>
          დაწყების რიცხვი
          <br />
          <input
            type="date"
            placeholder="mm/dd/yyyy"
            className="fullname"
            value={experience.start_date}
            onChange={changeStartDate}
            style={{ border: `1px solid ${errors[index].start_date}` }}
          />
        </label>
        <label>
          დამთავრების რიცხვი
          <br />
          <input
            type="date"
            placeholder="mm/dd/yyyy"
            className="fullname"
            value={experience.due_date}
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
          placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
          className="aboutMe"
          value={experience.description}
          onChange={changeDescription}
          style={{ border: `1px solid ${errors[index].description}` }}
        />
      </label>
    </Form>
  );
}
