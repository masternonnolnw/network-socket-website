import { Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import BodyText from "common/components/BodyText";
import Course from "module/Course";
import Link from "next/link";
import { ImCheckmark2 } from "react-icons/im";

interface InstructorCourseCardProps {
  courseID?: String;
  title: String;
  desc: String;
  students: string[];
}

export default function InstructorCourseCard(props: InstructorCourseCardProps) {
  const { title, desc, students, courseID } = props;
  const smallScreen = useMediaQuery("(max-width:850px)");
  return (
    <div
      style={{
        width: "200px",
        height: "100%",
        display: "flex",
        backgroundColor: "white",
        borderRadius: "14px",
        alignItems: "center",
        padding: "30px 30px",
        paddingBottom: "20px",
        position: "relative",
        flexDirection: "column"
      }}
    >
      <div
        style={{
          display: "block",
          textAlign: smallScreen ? "center" : "left",
          marginBottom: "10px"
        }}
      >
        <Link
          href={`/course/member/${courseID}`}
          style={{ height: "100%", textDecoration: "none", color: "black" }}
        >
          <Title order={5}>{title}</Title>
        </Link>
        <BodyText>Users count: {students.length}</BodyText>
      </div>

      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          textAlign: "center",
          backgroundColor: "#F6F5F4",
          padding: "20px",
          borderRadius: "14px"
        }}
      >
        {students.map((student, index) => {
          return (
            <Link
              href={`/chat/${courseID}+${student}`}
              style={{ height: "100%", textDecoration: "none", color: "black" }}
              key={"student" + index}
            >
              <BodyText>{student}</BodyText>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
