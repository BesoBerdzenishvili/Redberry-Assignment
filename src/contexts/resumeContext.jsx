import { createContext, useState, useEffect } from "react";

export const ResumeContext = createContext();

const ResumeContextProvider = ({ children }) => {
  const [name, setName] = useState(() => {
    const saved = localStorage.getItem("name");
    return saved ? JSON.parse(saved) : "";
  });
  const [surname, setSurname] = useState(() => {
    const saved = localStorage.getItem("surname");
    return saved ? JSON.parse(saved) : "";
  });
  const [image, setImage] = useState(() => {
    const saved = localStorage.getItem("image");
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
  const [phone, setPhone] = useState(() => {
    const saved = localStorage.getItem("phone");
    return saved ? JSON.parse(saved) : "";
  });
  const [experiences, setExperiences] = useState(() => {
    const saved = localStorage.getItem("experiences");
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 1,
            position: "",
            employer: "",
            start_date: "",
            due_date: "",
            description: "",
          },
        ];
  });
  const [educations, setEducations] = useState(() => {
    const saved = localStorage.getItem("educations");
    return saved
      ? JSON.parse(saved)
      : [{ id: 1, institute: "", degree: "", due_date: "", description: "" }];
  });
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
    localStorage.setItem("surname", JSON.stringify(surname));
    localStorage.setItem("image", JSON.stringify(image));
    localStorage.setItem("aboutMe", JSON.stringify(aboutMe));
    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("phone", JSON.stringify(phone));
    localStorage.setItem("experiences", JSON.stringify(experiences));
    localStorage.setItem("educations", JSON.stringify(educations));
  }, [name, surname, image, aboutMe, email, phone, experiences, educations]);

  return (
    <ResumeContext.Provider
      value={{
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
        resumeData,
        setResumeData,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};

export default ResumeContextProvider;
