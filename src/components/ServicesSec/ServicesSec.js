import React from "react";
import useCourses from "../../hooks/useCourses";
import ServiceCard from "../ServiceCard/ServiceCard";

const ServicesSec = () => {
  const courses = useCourses();
  return (
    <div className="row">
      {courses.map((course) => (
        <ServiceCard data={course} key={course.id}></ServiceCard>
      ))}
    </div>
  );
};

export default ServicesSec;
