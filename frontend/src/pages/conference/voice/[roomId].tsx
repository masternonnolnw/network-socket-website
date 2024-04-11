import { Title } from "@mantine/core";
import Conference from "module/Conference";
import Loading from "module/Loading";
import { useRouter } from "next/router";

export default function ConferenceRoomVoiceCall() {
  const router = useRouter();
  const { roomId } = router.query;
  if (!roomId) return <Loading />;
  return <Conference roomId={String(roomId)} useVideo={false} />;
}
