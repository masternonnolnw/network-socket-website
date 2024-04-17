import { Title } from "@mantine/core";
import { useAuth } from "common/contexts/AuthContext";
import CourseMember from "module/CourseMember";
import Loading from "module/Loading";
import PlsLogin from "module/PlsLogin.tsx";
import { useRouter } from "next/router";

export default function CourseDetailPage() {
  const { user, isReady, isAuthenticated } = useAuth();
  const router = useRouter();
  const { courseId } = router.query;
  if (!courseId || !isReady) return <Loading />;
  if (!isAuthenticated)
    return <PlsLogin />;
  return <CourseMember userId={user.userId} courseId={String(courseId)} />;
}
