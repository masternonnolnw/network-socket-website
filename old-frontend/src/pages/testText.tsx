import { Title } from "@mantine/core";
import BodyText from "common/components/BodyText";

export default function TestText() {
  return (
    <div>
      <Title order={1}>Learning and teaching online, made easy.</Title>
      <Title order={2}>Learning and teaching online, made easy.</Title>
      <Title order={3}>Learning and teaching online, made easy.</Title>
      <Title order={4}>Learning and teaching online, made easy.</Title>
      <BodyText size="xl">
        Practice your English and learn new things with the platform. Make
        learning words more fun with mini-games
      </BodyText>
      <BodyText size="lg">
        Practice your English and learn new things with the platform. Make
        learning words more fun with mini-games
      </BodyText>
      <BodyText size="md">
        Practice your English and learn new things with the platform. Make
        learning words more fun with mini-games
      </BodyText>
      <BodyText size="sm">
        Practice your English and learn new things with the platform. Make
        learning words more fun with mini-games
      </BodyText>
    </div>
  );
}
