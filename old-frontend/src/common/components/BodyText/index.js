import { Text } from "@mantine/core";

export default function BodyText({
  children,
  size = "md",
  weight = "600",
  color = "black",
}) {
  return (
    <Text size={size} weight={weight} color={color}>
      {children}
    </Text>
  );
}
