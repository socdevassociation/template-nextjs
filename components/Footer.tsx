import {
  Footer as MantineFooter,
  Group,
  Center,
  Text,
  Stack,
  Flex,
} from "@mantine/core";
import Link from "next/link";

export default function SDAFooter() {
  return (
    <MantineFooter height={120} p="md" fixed={false}>
      <Flex justify="end" direction="column" h="100%">
        <Text align="center" size="sm">
          Proudly designed and hosted by the{" "}
          <Link
            className="whitespace-nowrap"
            href="https://socdevassociation.org"
          >
            Socialist Developers Association
          </Link>
        </Text>
      </Flex>
    </MantineFooter>
  );
}
