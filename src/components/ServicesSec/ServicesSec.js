import React from "react";
import { useCourses } from "../../contexts/CoursesContext";
import ServiceCard from "../ServiceCard/ServiceCard";

const ServicesSec = () => {
  // const courses = useCourses();
  const courses = useCourses();
  return (
    <div className="row">
      <div className="col-md-12">
        <h2 className="text-center mb-5 fs-1">English Courses</h2>
      </div>
      {courses.map((course) => (
        <ServiceCard data={course} key={course.id}></ServiceCard>
      ))}
    </div>
  );
};

export default ServicesSec;
