import { Title } from "@mantine/core";
import { useRouter } from "next/router";
import Chat from "module/Chat";
import Loading from "module/Loading";

export default function ChatPage() {
  // console.log("test");
  const router = useRouter();
  const { roomId, studentId } = router.query;
  if (!roomId || !studentId) return <Loading />;
  return <Chat roomId={String(roomId + "with" + String(studentId))} />;
}
