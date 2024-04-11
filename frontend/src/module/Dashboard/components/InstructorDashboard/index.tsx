import { AiFillCloseCircle, AiFillPlusCircle } from "react-icons/ai";
import {
  ActionIcon,
  Button,
  SimpleGrid,
  TextInput,
  Title,
} from "@mantine/core";
import { useEffect, useState } from "react";
import InstructorCourseCard from "./Components/InstructorCourseCard";
import { useStyles } from "./styles";
import { useMediaQuery } from "@mantine/hooks";
import CourseBar from "./Components/CourseBar";
import axios from "axios";
import { baseApiURL } from "common/const";

interface InstructorDashboardProps {
  userId: string;
}

export interface InstructorCourseProps {
  courseId: string;
  title: string;
  desc: string;
  students: string[];
}

export default function InstructorDashboard(props: InstructorDashboardProps) {
  const { userId } = props;

  const { classes } = useStyles();
  const smallScreen = useMediaQuery("(max-width:850px)");

  const [courses, setCourses] = useState<InstructorCourseProps[]>([]);

  useEffect(() => {
    async function fetchCourses() {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        `${baseApiURL}/user/instructor-courses/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log("data", res.data);
      const newCourse = res.data.map((course: any) => {
        const { title, description, id, students } = course;
        return {
          title: title,
          desc: description,
          courseId: id,
          students: students.map((student: any) => student.name),
        };
      });
      setCourses(newCourse);
    }
    if (userId) fetchCourses();
  }, [userId]);
  // console.log(courses);
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        minHeight: "100vh",
        backgroundColor: "#F6F5F4",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          position: "relative",
          justifyContent: smallScreen ? "normal" : "center",
          alignItems: smallScreen ? "center" : "normal",
          flexDirection: smallScreen ? "column" : "row",
          paddingTop: "40px",
          gap: "40px",
        }}
      >
        <SimpleGrid
          cols={5}
          breakpoints={[
            { maxWidth: 1200, cols: 4, spacing: "md" },
            { maxWidth: 980, cols: 3, spacing: "md" },
            { maxWidth: 755, cols: 2, spacing: "sm" },
            { maxWidth: 600, cols: 1, spacing: "sm" },
          ]}
        >
          {courses.map((course) => {
            return (
              <InstructorCourseCard
                key={course.courseId}
                title={course.title}
                desc={course.desc}
                students={course.students}
                courseID={course.courseId}
              />
            );
          })}
        </SimpleGrid>
      </div>
      <CourseBar userId={userId} setCourses={setCourses} />
    </div>
  );
}
