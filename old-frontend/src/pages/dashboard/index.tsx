import { Title } from "@mantine/core";
import { useAuth } from "common/contexts/AuthContext";
import { Role } from "common/contexts/AuthContext/types";
import Dashboard from "module/Dashboard";
import InstructorDashboard from "module/Dashboard/components/InstructorDashboard";
import StudentDashboard from "module/Dashboard/components/StudentDashboard";
import Loading from "module/Loading";
import PlsLogin from "module/PlsLogin.tsx";

export default function DashboardPage() {
  const { user, isReady, isAuthenticated } = useAuth();
  if (!isReady) return <Loading />;
  if (isReady && !isAuthenticated) return <PlsLogin />;
  if (user.role == Role.instructor)
    return <InstructorDashboard userId={user.userId} />;
  return <StudentDashboard userId={user.userId} />;
}
