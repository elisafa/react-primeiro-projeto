import StudentTable from "@/components/StudentTable";
import { students } from "@/data/students";
import React from "react";

const page = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-5xl mb-5">Lista de Estudantes</h1>
      <StudentTable students={students} />
    </div>
  );
};

export default page;
