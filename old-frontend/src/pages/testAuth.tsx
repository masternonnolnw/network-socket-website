import { useAuth } from "common/contexts/AuthContext";
import Loading from "module/Loading";

export default function TestAuth() {
  const { user, isReady, isAuthenticated } = useAuth();
  if (!isReady) return <Loading />;
  // console.log(user, isReady, isAuthenticated);

  return (
    <div>
      Test Auth
      <button
        onClick={() => {
          localStorage.removeItem("token");
          location.href = "/auth";
        }}
      >
        logout
      </button>
    </div>
  );
}
