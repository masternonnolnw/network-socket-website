import {
  ActionIcon,
  Button,
  SimpleGrid,
  TextInput,
  Title
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import axios from "axios";
import BodyText from "common/components/BodyText";
import { baseApiURL } from "common/const";
import { useAuth } from "common/contexts/AuthContext";
import { Role } from "common/contexts/AuthContext/types";
import Chat from "module/Chat";
import { CourseCardProps } from "module/Course/components/CourseCard";
import Link from "next/link";
import { title } from "process";
import { useEffect, useState } from "react";
import { AiFillCloseCircle, AiFillPlusCircle } from "react-icons/ai";
import { useStyles } from "./styles";

interface CourseMemberProps {
  userId: string;
  courseId: string;
}
interface youtubeCardProps {
  youtubeId: string;
  clipTitle: string;
}
export default function CourseMember(props: CourseMemberProps) {
  const { classes } = useStyles();
  const { userId, courseId } = props;
  const [expand, setExpand] = useState(true);
  const [youtubeLink, setYoutubeLink] = useState("");
  const [clipTitle, setClipTitle] = useState("");
  const [course, setCourse] = useState<CourseCardProps>();
  const [youtubeCards, setYoutubeCards] = useState<youtubeCardProps[]>([]);

  const smallScreen = useMediaQuery("(max-width:1400px)");
  const xsScreen = useMediaQuery("(max-width:700px)");

  const { user } = useAuth();
  const createNewClip = async () => {
    const res = await axios.post(`${baseApiURL}/youtube-link/`, {
      youtubeId: youtubeLink,
      courseId: Number(courseId),
      clipTitle: clipTitle
    });
    // console.log(res.data);
    setYoutubeCards((prev) => [
      ...prev,
      {
        youtubeId: youtubeLink,
        clipTitle: clipTitle
      }
    ]);
    setClipTitle("");
    setYoutubeLink("");
    setExpand(true);
  };

  useEffect(() => {
    async function fetchYoutubeCard() {
      const res = await axios.get(
        `${baseApiURL}/youtube-link/course/${courseId}`
      );
      // console.log(res.data);
      const newYoutubeCard = res.data.map((youtubeCard: any) => {
        const { youtubeId, clipTitle } = youtubeCard;
        return {
          youtubeId: youtubeId,
          clipTitle: clipTitle
        };
      });
      setYoutubeCards(newYoutubeCard);
    }
    if (courseId) fetchYoutubeCard();
  }, [courseId]);

  useEffect(() => {
    async function fetchCourse() {
      const res = await axios.get(`${baseApiURL}/course/${courseId}`);
      const newCourse = {
        title: res.data.title,
        desc: res.data.description,
        teacherName: res.data.instructor.name,
        courseId: res.data.id
      };
      setCourse(newCourse);
    }
    if (userId && courseId) fetchCourse();
  }, [userId, courseId]);
  // console.log(youtubeCards);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        alignContent: "center",
        width: "100vw",
        height: "100%",
        minHeight: "100vh",
        flexDirection: "column",
        gap: smallScreen ? "20px" : "40px",
        backgroundColor: "#F6F5F4",
        paddingTop: smallScreen ? "20px" : "40px"
      }}
    >
      <div
        style={{
          display: "flex",
          width: "90%",
          height: "100%",
          background: "#FFFFFF",
          flexDirection: "column",
          alignItems: "center",
          padding: "30px",
          gap: "12px",
          borderRadius: "14px",
          position: "relative",
          textAlign: "center",
          paddingBottom: "70px"
        }}
      >
        <Title order={4}>{course?.title}</Title>
        <div style={{ display: "flex", paddingLeft: "20px" }}>
          <BodyText>{course?.desc}</BodyText>
        </div>
        <div
          style={{
            display: "flex",
            // position: "absolute",
            // bottom: "20px",
            // right: "20px",
            gap: "10px"
          }}
        >
          <Button
            sx={{
              width: "100px",
              borderRadius: "20px",
              backgroundColor: "#2B788B",
              "&:hover": {
                backgroundColor: "#58735D"
              },
              marginTop: "10px"
            }}
            size="xs"
          >
            <Link
              href={`/conference/${courseId}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <BodyText size="12px" color="white">
                Video Call
              </BodyText>
            </Link>
          </Button>
          <Button
            sx={{
              width: "100px",
              borderRadius: "20px",
              backgroundColor: "#2B788B",
              "&:hover": {
                backgroundColor: "#58735D"
              },
              marginTop: "10px"
            }}
            size="xs"
          >
            <Link
              href={`/conference/voice/${courseId}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <BodyText size="12px" color="white">
                Voice Call
              </BodyText>
            </Link>
          </Button>

          <Button
            sx={{
              width: "170px",
              borderRadius: "20px",
              backgroundColor: "#2B788B",
              "&:hover": {
                backgroundColor: "#58735D"
              },
              marginTop: "10px",
              position: "absolute",
              bottom: "20px",
              right: "20px"
            }}
            size="xs"
          >
            <Link
              href={`/chat/${courseId}+${user.name}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <BodyText size="12px" color="white">
                Chat with Instructor
              </BodyText>
            </Link>
          </Button>
        </div>
      </div>
      <SimpleGrid
        cols={2}
        breakpoints={[{ maxWidth: 1600, cols: 1, spacing: "md" }]}
      >
        {youtubeCards.map((youtubeCard, index) => {
          return (
            <div
              key={youtubeCard.youtubeId}
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
                gap: "20px",
                width: "700px",
                maxWidth: "90vw",
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "14px",
                paddingTop: "20px"
              }}
            >
              <Title order={4}>{youtubeCard.clipTitle}</Title>
              <iframe
                width={xsScreen ? "343.33" : "560"}
                height={xsScreen ? "190" : "315"}
                src={`https://www.youtube.com/embed/${youtubeCard.youtubeId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          );
        })}
      </SimpleGrid>

      <div
        style={{
          width: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {user.role == Role.instructor && (
          <ActionIcon
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              paddingBottom: "50px"
            }}
          >
            <AiFillPlusCircle
              color="black"
              size={50}
              style={{ display: expand ? "flex" : "none" }}
              onClick={() => setExpand(expand ? false : true)}
            ></AiFillPlusCircle>
            <AiFillCloseCircle
              color="black"
              size={50}
              style={{ display: !expand ? "flex" : "none" }}
              onClick={() => setExpand(true)}
            />
          </ActionIcon>
        )}

        <div
          style={{
            display: !expand ? "flex" : "none",
            width: smallScreen ? "40%" : "60%",
            padding: "20px",
            height: "100%",
            borderRadius: "14px",
            backgroundColor: "#FFFFFF",
            marginLeft: "auto",
            marginRight: "auto",
            flexDirection: smallScreen ? "column" : "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px"
          }}
        >
          <div style={{ textAlign: "center", marginLeft: "10px" }}>
            <Title order={6}>New Course</Title>
          </div>

          <TextInput
            required
            sx={{ width: "100%" }}
            placeholder="Enter clip title"
            label="Clip Title"
            value={clipTitle}
            onChange={(event) => setClipTitle(event.currentTarget.value)}
          ></TextInput>
          <TextInput
            sx={{ width: "100%" }}
            placeholder="Enter youtube link"
            label="youtube link"
            value={youtubeLink}
            onChange={(event) => setYoutubeLink(event.currentTarget.value)}
            withAsterisk
            required
          ></TextInput>
          {
            <Button
              className={classes.ButtonStyle}
              onClick={() => createNewClip()}
            >
              Create
            </Button>
          }
        </div>

        <div
          style={{
            backgroundColor: "white",
            display: "flex",
            height: "100%",
            width: "100%"
          }}
        >
          <Chat roomId={courseId} />
        </div>
      </div>
    </div>
  );
}
