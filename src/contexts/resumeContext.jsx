import { createContext, useState, useEffect } from "react";

export const ResumeContext = createContext();

const ResumeContextProvider = ({ children }) => {
  const [firstName, setFirstName] = useState(() => {
    const saved = localStorage.getItem("firstName");
    return saved ? JSON.parse(saved) : "";
  });
  const [lastName, setLastName] = useState(() => {
    const saved = localStorage.getItem("lastName");
    return saved ? JSON.parse(saved) : "";
  });
  const [photo, setPhoto] = useState(() => {
    const saved = localStorage.getItem("photo");
    return saved ? JSON.parse(saved) : "";
  });
  const [aboutMe, setAboutMe] = useState(() => {
    const saved = localStorage.getItem("aboutMe");
    return saved ? JSON.parse(saved) : "";
  });
  const [email, setEmail] = useState(() => {
    const saved = localStorage.getItem("email");
    return saved ? JSON.parse(saved) : "";
  });
  const [mobile, setMobile] = useState(() => {
    const saved = localStorage.getItem("mobile");
    return saved ? JSON.parse(saved) : "";
  });
  const [job, setJob] = useState(() => {
    const saved = localStorage.getItem("job");
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 1,
            position: "",
            employer: "",
            startDate: "",
            endDate: "",
            description: "",
          },
        ];
  });
  const [educationalInstitute, setEducationalInstitute] = useState(() => {
    const saved = localStorage.getItem("educationalInstitute");
    return saved
      ? JSON.parse(saved)
      : [{ id: 1, school: "", degree: "", endDate: "", description: "" }];
  });
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    localStorage.setItem("firstName", JSON.stringify(firstName));
    localStorage.setItem("lastName", JSON.stringify(lastName));
    localStorage.setItem("photo", JSON.stringify(photo));
    localStorage.setItem("aboutMe", JSON.stringify(aboutMe));
    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("mobile", JSON.stringify(mobile));
    localStorage.setItem("job", JSON.stringify(job));
    localStorage.setItem(
      "educationalInstitute",
      JSON.stringify(educationalInstitute)
    );
  }, [
    firstName,
    lastName,
    photo,
    aboutMe,
    email,
    mobile,
    job,
    educationalInstitute,
  ]);

  return (
    <ResumeContext.Provider
      value={{
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
        resumeData,
        setResumeData,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};

export default ResumeContextProvider;
