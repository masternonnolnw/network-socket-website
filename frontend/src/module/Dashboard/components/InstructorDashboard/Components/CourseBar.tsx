import { AiFillCloseCircle, AiFillPlusCircle } from "react-icons/ai";
import { ActionIcon, Button, TextInput, Title } from "@mantine/core";
import { useState } from "react";
import { useStyles } from "./styles";
import { useMediaQuery } from "@mantine/hooks";
import { baseApiURL } from "common/const";
import axios from "axios";
import { InstructorCourseProps } from "..";

interface CourseBarProps {
  userId: string;
  setCourses: Function;
}
export default function CourseBar(props: CourseBarProps) {
  const { userId, setCourses } = props;

  const { classes } = useStyles();
  const [expand, setExpand] = useState(true);
  const [newCourseName, setCourseName] = useState("");
  const [newCoursDesc, setCourseDesc] = useState("");
  const smallScreen = useMediaQuery("(max-width:1400px)");

  const [id, setId] = useState(-1);

  const createNewCourse = async () => {
    if (!newCourseName || !newCoursDesc) return;
    setCourseName("");
    setCourseDesc("");
    setExpand(true);
    setCourses((prev: any) => [
      ...prev,
      {
        title: newCourseName,
        desc: newCoursDesc,
        students: [],
        courseId: String(id),
      },
    ]);
    setId(id - 1);
    const token = localStorage.getItem("token");
    const res = await axios.post(
      `${baseApiURL}/course`,
      {
        title: newCourseName,
        description: newCoursDesc,
        instructorId: Number(userId),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };
  return (
    <div
      style={{
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "50px",
      }}
    >
      <ActionIcon
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          paddingBottom: "50px",
        }}
      >
        <AiFillPlusCircle
          color="black"
          size={25}
          style={{ display: expand ? "flex" : "none" }}
          onClick={() => setExpand(expand ? false : true)}
        ></AiFillPlusCircle>
        <AiFillCloseCircle
          color="black"
          size={25}
          style={{ display: !expand ? "flex" : "none" }}
          onClick={() => setExpand(true)}
        />
      </ActionIcon>
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
          gap: "10px",
        }}
      >
        <div style={{ textAlign: "center", marginLeft: "10px" }}>
          <Title order={6}>New Course</Title>
        </div>
        <TextInput
          sx={{ width: "100%" }}
          placeholder="Enter course name"
          label="Course name"
          value={newCourseName}
          onChange={(event) => setCourseName(event.currentTarget.value)}
          withAsterisk
          required
        ></TextInput>
        <TextInput
          required
          sx={{ width: "100%" }}
          placeholder="Enter course description"
          label="Course description"
          value={newCoursDesc}
          onChange={(event) => setCourseDesc(event.currentTarget.value)}
        ></TextInput>

        <Button
          className={classes.ButtonStyle}
          onClick={() => createNewCourse()}
        >
          Create
        </Button>
      </div>
    </div>
  );
}
