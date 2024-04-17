import { Title } from "@mantine/core";
import { useAuth } from "common/contexts/AuthContext";
import Course from "module/Course";
import Loading from "module/Loading";

export default function CoursePage() {
  const { user, isReady, isAuthenticated } = useAuth();
  if (!isReady) return <Loading />;
  if (isReady && !isAuthenticated) return <Course userId={"unauth"} />;
  return <Course userId={user.userId} />;
}
