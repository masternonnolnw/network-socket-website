import { useToggle, upperFirst, useMediaQuery } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { useState } from "react";

import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
  Switch,
  Title
} from "@mantine/core";
import { GiTeacher, GiWhiteBook } from "react-icons/gi";
import axios from "axios";
import { baseApiURL } from "common/const";
import BodyText from "common/components/BodyText";
import Link from "next/link";

export function AuthPage(props: PaperProps) {
  const [type, toggle] = useToggle(["login", "register"]);
  const [isTeacher, setIsTeacher] = useState(false);

  const xsScreen = useMediaQuery("(max-width:755px)");

  const [error, setError] = useState("");
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      terms: true
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6 ? "Password should include at least 6 characters" : null
    }
  });

  const register = async () => {
    // console.log(
    //   "register",
    //   form.values.name,
    //   form.values.email,
    //   form.values.password,
    //   isTeacher
    // );

    // console.log(`${baseApiURL}/auth/signin`);
    try {
      const res = await axios.post(`${baseApiURL}/auth/signup`, {
        name: form.values.name,
        email: form.values.email,
        password: form.values.password,
        role: isTeacher ? "TEACHER" : "STUDENT"
      });
      const token = res.data;
      if (token) {
        localStorage.setItem("token", token);
        window.location.href = "/";
      }
    } catch (err: any) {
      setError(err.response.data.message);
      console.log(err.response.data.message);
    }
  };

  const login = async () => {
    try {
      const res = await axios.post(`${baseApiURL}/auth/signin`, {
        email: form.values.email,
        password: form.values.password
      });
      const token = res.data;
      if (token) {
        localStorage.setItem("token", token);
        window.location.href = "/";
      }
    } catch (err: any) {
      setError(err.response.data.message);
      console.log(err.response.data.message);
    }
  };

  const loginOrRegister = () => {
    if (!form.values.terms)
      return setError("Please agree to the terms and conditions");
    if (type == "login") {
      return login();
    } else return register();
  };

  return (
    <div
      style={{
        display: "flex",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: `translate(-50%,-50%) scale(1.2)`
      }}
    >
      <Paper
        radius="md"
        p="xl"
        withBorder
        {...props}
        sx={{ minWidth: "300px" }}
      >
        <Text
          size="lg"
          weight={500}
          sx={{ textAlign: "center", marginTop: "10px" }}
        >
          Welcome to&nbsp;
          <Link href={`/`} style={{ color: "black" }}>
            Banana
          </Link>
          , {type}
        </Text>

        <Divider labelPosition="center" my="lg" />

        <form onSubmit={form.onSubmit(loginOrRegister)}>
          <Stack>
            {type === "register" && (
              <TextInput
                required
                label="Name"
                placeholder="Your name"
                value={form.values.name}
                onChange={(event) => {
                  form.setFieldValue("name", event.currentTarget.value);
                  setError("");
                }}
              />
            )}

            {type === "register" && (
              <Switch
                checked={isTeacher}
                onChange={(event) => {
                  setIsTeacher(event.currentTarget.checked);
                  setError("");
                }}
                labelPosition="left"
                size="sm"
                color="cyan"
                onLabel={<GiTeacher size={14} />}
                offLabel={<GiWhiteBook size={16} />}
                label="Are you teacher?"
              />
            )}

            <TextInput
              required
              label="Email"
              placeholder="monkey@banana.split"
              value={form.values.email}
              onChange={(event) => {
                form.setFieldValue("email", event.currentTarget.value);
                setError("");
              }}
              error={form.errors.email && "Invalid email"}
            />

            <PasswordInput
              required
              label="Password"
              placeholder="Your password"
              value={form.values.password}
              onChange={(event) => {
                form.setFieldValue("password", event.currentTarget.value);
                setError("");
              }}
              error={
                form.errors.password &&
                "Password should include at least 6 characters"
              }
            />

            {type === "register" && (
              <Checkbox
                label="I accept terms and conditions"
                checked={form.values.terms}
                color="cyan"
                onChange={(event) => {
                  form.setFieldValue("terms", event.currentTarget.checked);
                  setError("");
                }}
              />
            )}
          </Stack>
          <div style={{ marginBottom: "-20px", marginTop: "10px" }}>
            <BodyText size="10px" color="red">
              {error}
            </BodyText>
          </div>

          <Group position="apart" mt="xl">
            <Anchor
              component="button"
              type="button"
              color="dimmed"
              onClick={() => toggle()}
              size="xs"
            >
              {type === "register"
                ? "Already have an account? Login"
                : "Don't have an account? Register"}
            </Anchor>
            <Button
              type="submit"
              sx={{
                backgroundColor: "#15aabf",
                "&:hover": {
                  backgroundColor: "#60c7d5"
                }
              }}
            >
              {upperFirst(type)}
            </Button>
          </Group>
        </form>
      </Paper>
    </div>
  );
}
