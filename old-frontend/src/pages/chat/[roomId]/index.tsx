import { Title } from "@mantine/core";
import { useRouter } from "next/router";
import Chat from "module/Chat";
import Loading from "module/Loading";

export default function ChatPage() {
  const router = useRouter();
  const { roomId } = router.query;
  if (!roomId) return <Loading />;
  return <Chat roomId={String(roomId)} />;
}
