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

  "& .date": {
    width: 371,
    paddingRight: 16,
    color: "rgba(0, 0, 0, 0.6)",
    fontSize: 19,
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
    } else {
      setErrors(
        errors.map((i) => {
          if (i.id === index + 1) {
            return { ...i, start_date: "red" };
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
    } else {
      setErrors(
        errors.map((i) => {
          if (i.id === index + 1) {
            return { ...i, due_date: "red" };
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
        ?????????????????????????????????
        <br />
        <Input
          type="text"
          placeholder="??????????????????????????????, ???????????????????????????, ???.???."
          value={experience.position}
          onChange={changePosition}
          style={{ border: `1px solid ${errors[index].position}` }}
          check={errors[index].position}
        />
        <p>????????????????????? 2 ?????????????????????</p>
      </label>
      <br />
      <label className="text">
        ????????????????????????????????????
        <br />
        <Input
          type="tel"
          placeholder="????????????????????????????????????"
          value={experience.employer}
          onChange={changeEmployer}
          style={{ border: `1px solid ${errors[index].employer}` }}
          check={errors[index].employer}
        />
        <p>????????????????????? 2 ?????????????????????</p>
      </label>

      <FullName>
        <label>
          ???????????????????????? ??????????????????
          <br />
          <input
            type="date"
            placeholder="mm/dd/yyyy"
            className="date"
            value={experience.start_date}
            onChange={changeStartDate}
            style={{ border: `1px solid ${errors[index].start_date}` }}
          />
        </label>
        <label>
          ????????????????????????????????? ??????????????????
          <br />
          <input
            type="date"
            placeholder="mm/dd/yyyy"
            className="date"
            value={experience.due_date}
            onChange={changeEndDate}
            style={{ border: `1px solid ${errors[index].due_date}` }}
          />
        </label>
      </FullName>

      <br />
      <label>
        ??????????????????
        <br />
        <textarea
          placeholder="???????????? ??????????????????????????????????????? ?????? ?????????????????? ??????????????????"
          className="aboutMe"
          value={experience.description}
          onChange={changeDescription}
          style={{ border: `1px solid ${errors[index].description}` }}
        />
      </label>
    </Form>
  );
}
