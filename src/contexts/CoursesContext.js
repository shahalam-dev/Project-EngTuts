import { createContext, useContext, useEffect, useState } from "react";

const CoursesContext = createContext();

const useCourses = () => {
  return useContext(CoursesContext);
};

const CoursesProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      });
  });
  return (
    <CoursesContext.Provider value={courses}>
      {children}
    </CoursesContext.Provider>
  );
};

export { CoursesProvider, useCourses };
