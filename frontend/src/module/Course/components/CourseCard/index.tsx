import { Button, MediaQuery, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import axios from "axios";
import BodyText from "common/components/BodyText";
import { baseApiURL } from "common/const";
import { useAuth } from "common/contexts/AuthContext";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ImCheckmark2 } from "react-icons/im";

export interface CourseCardProps {
  title: string;
  desc: string;
  teacherName: string;
  courseId: string;
  enrolled?: boolean;
}

export default function CourseCard(props: CourseCardProps) {
  const { title, desc, teacherName, courseId, enrolled = false } = props;
  const [isEnroll, setIsEnroll] = useState(enrolled);

  useEffect(() => {
    setIsEnroll(enrolled);
  }, [enrolled]);

  const smallScreen = useMediaQuery("(max-width:850px)");
  const { user, isReady, isAuthenticated } = useAuth();
  const userId = user.userId;
  const onEnroll = async () => {
    const res = await axios.patch(`${baseApiURL}/user/${userId}`, {
      courseIdsToEnroll: [courseId]
    });
    // console.log(res);
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        backgroundColor: "white",
        borderRadius: "14px",
        alignItems: "center",
        padding: "30px 30px",
        paddingBottom: "20px",
        position: "relative",
        flexDirection: smallScreen ? "column" : "row"
      }}
    >
      {isEnroll && (
        <ImCheckmark2
          style={{
            position: "absolute",
            bottom: "20px",
            right: "20px",
            color: "#639B6D"
          }}
          fontSize="20px"
        />
      )}
      <div
        style={{
          display: "block",
          width: smallScreen ? "100%" : "100px",
          textAlign: smallScreen ? "center" : "left",
          marginBottom: smallScreen ? "10px" : "0px",
          height: "100%",
          wordBreak: "break-all",
          marginRight: "20px"
        }}
      >
        <BodyText>{teacherName}</BodyText>
      </div>

      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignSelf: "flex-start",
          flexDirection: "column"
        }}
      >
        <Link
          href={`/course/${courseId}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Title order={5}>{title}</Title>
        </Link>
        <BodyText size="14px">{desc}</BodyText>
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
              onEnroll();
            }}
          >
            Enroll
          </Button>
        )}
      </div>
    </div>
  );
}
