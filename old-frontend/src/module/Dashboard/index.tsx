import { ActionIcon, TextInput, Title } from "@mantine/core";
import { useState } from "react";
import { AiFillCloseCircle, AiFillPlusCircle } from "react-icons/ai";
import InstructorDashboard from "./components/InstructorDashboard";
import StudentDashboard from "./components/StudentDashboard";

export default function Dashboard() {
  const [expand, setExpand] = useState(1);
  // return <StudentDashboard></StudentDashboard>;
  return (
    <div>
      {/* <InstructorDashboard></InstructorDashboard>
      <StudentDashboard></StudentDashboard> */}
    </div>
  );
}
