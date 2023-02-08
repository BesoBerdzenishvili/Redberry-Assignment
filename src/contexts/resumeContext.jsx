import { createContext, useState } from "react";

export const ResumeContext = createContext();

const ResumeContextProvider = ({ children }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [photo, setPhoto] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [job, setJob] = useState([]);
  const [educationalInstitute, setEducationalInstitute] = useState([]);

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
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};

export default ResumeContextProvider;
