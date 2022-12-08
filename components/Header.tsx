import { Header as MantineHeader, Text } from "@mantine/core";

export default function SDAHeader() {
  return (
    <MantineHeader height={70} p="md">
      <div>
        <Text size="lg">Header</Text>
      </div>
    </MantineHeader>
  );
}
