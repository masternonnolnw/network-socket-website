import { Button, Title } from "@mantine/core";
import axios from "axios";
import BodyText from "common/components/BodyText";
import { baseApiURL } from "common/const";
import { useAuth } from "common/contexts/AuthContext";
import { CourseCardProps } from "module/Course/components/CourseCard";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ImCheckmark2 } from "react-icons/im";

interface CourseDetailProps {
  courseId: String;
  userId: String;
}
export default function CourseDetail(props: CourseDetailProps) {
  const { courseId, userId } = props;

  const { isAuthenticated } = useAuth();

  const [course, setCourse] = useState<CourseCardProps>();

  const teacherName = course?.teacherName;
  const title = course?.title;
  const desc = course?.desc;
  const enrolled = course?.enrolled;
  const [isEnroll, setIsEnroll] = useState(enrolled);

  useEffect(() => {
    setIsEnroll(enrolled);
  }, [enrolled]);

  useEffect(() => {
    const handleEnroll = async () => {};
    async function fetchCourse() {
      try {
        const res = await axios.get(
          `${baseApiURL}/course/${courseId}${
            userId != "unauth" ? "/" + userId : ""
          }`
        );
        const newCourse = {
          title: res.data.title,
          desc: res.data.description,
          teacherName: res.data.instructor.name,
          courseId: res.data.id,
          enrolled: res.data.enrolled
        };
        setCourse(newCourse);
      } catch (e) {
        console.log(e);
      }
    }
    if (userId && courseId) fetchCourse();
  }, [userId, courseId]);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        width: "100vw",
        height: "100%",
        minHeight: "100vh",
        flexDirection: "column",
        backgroundColor: "white",
        padding: "60px 100px",
        gap: "10px"
      }}
    >
      <Button
        sx={{
          width: "100px",
          borderRadius: "4px",
          border: "1px solid #639B6D",
          backgroundColor: "rgba(0,0,0,0)",
          "&:hover": {
            backgroundColor: "rgba(0,0,0,0)",
            border: "1px solid #58735D"
          },
          marginTop: "0px"
        }}
      >
        <Link
          href={`/course/`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <BodyText size="14px">&lt; &nbsp;Back</BodyText>
        </Link>
      </Button>
      <div
        style={{
          display: "flex",
          margin: "40px 0px",
          flexDirection: "row",
          gap: "10px",
          alignItems: "flex-end"
        }}
      >
        <Title order={4}>{title}</Title>
        {isEnroll && (
          <ImCheckmark2
            style={{
              color: "#639B6D"
            }}
            fontSize="20px"
          />
        )}
      </div>
      <BodyText size="16px">Teacher: &nbsp;{teacherName}</BodyText>
      <BodyText size="16px">description: &nbsp;{desc}</BodyText>
      {!isEnroll && isAuthenticated && (
        <Button
          sx={{
            width: "100px",
            borderRadius: "20px",
            backgroundColor: "#639B6D",
            "&:hover": {
              backgroundColor: "#58735D"
            },
            marginTop: "10px"
          }}
          onClick={() => {
            setIsEnroll(!isEnroll);
          }}
        >
          Enroll
        </Button>
      )}
      {isEnroll && (
        <Button
          sx={{
            width: "200px",
            borderRadius: "20px",
            backgroundColor: "#2B788B",
            "&:hover": {
              backgroundColor: "#58735D"
            },
            marginTop: "10px"
          }}
        >
          <Link
            href={`/course/member/${courseId}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <BodyText size="14px" color="white">
              Go to class
            </BodyText>
          </Link>
        </Button>
      )}
    </div>
  );
}
