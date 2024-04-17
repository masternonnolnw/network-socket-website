import { Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import CourseCard, {
  CourseCardProps
} from "module/Course/components/CourseCard";
import { RxDashboard } from "react-icons/rx";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseApiURL } from "common/const";

interface StudentDashboardProps {
  userId: string;
}
export default function StudentDashboard(props: StudentDashboardProps) {
  const { userId } = props;
  const [courses, setCourses] = useState<CourseCardProps[]>([]);

  const smallScreen = useMediaQuery("(max-width:1400px)");
  const xsScreen = useMediaQuery("(max-width:700px)");

  const token = localStorage.getItem("token");

  useEffect(() => {
    async function fetchMessages() {
      const res = await axios.get(
        `${baseApiURL}/user/student-courses/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      // console.log(res);
      const newCourse = res.data.map((course: any) => {
        const { title, description, instructor, id } = course;
        return {
          title: title,
          desc: description,
          teacherName: instructor.name,
          courseId: id
        };
      });
      setCourses(newCourse);
    }
    if (token) fetchMessages();
  }, [userId, token]);

  // console.log(courses);
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        minHeight: "100vh",
        display: "flex",
        backgroundColor: "#F6F5F4",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: smallScreen ? "20px" : "40px"
      }}
    >
      <div
        style={{
          display: "flex",
          height: "84px",
          width: "80%",
          background: "#FFFFFF",
          flexDirection: "row",
          alignItems: "center",
          padding: "22px",
          gap: "12px",
          borderRadius: "14px"
        }}
      >
        <RxDashboard fontSize={40} />
        <Title order={4}>Dashboard</Title>
      </div>
      <div
        style={{
          width: xsScreen ? "80%" : "60%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "20px",
          gap: "10px"
        }}
      >
        {courses.map((course) => {
          return (
            <CourseCard
              title={course.title}
              desc={course.desc}
              teacherName={course.teacherName}
              courseId={course.courseId}
              enrolled={true}
              key={course.courseId}
            />
          );
        })}
      </div>
    </div>
  );
}
