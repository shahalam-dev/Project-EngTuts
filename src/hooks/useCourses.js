import { useEffect, useState } from "react";

const useCourses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      });
  }, []);

  // const checkoutCourse = (id) => {
  //   const course = courses.find((item) => item.id === id);
  //   return course;
  // };

  return courses;
};

export default useCourses;
