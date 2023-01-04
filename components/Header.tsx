import {
  Header as MantineHeader,
  Image,
  Flex,
  Burger,
  createStyles,
  Group,
  Transition,
  Paper,
  Container,
  Title,
} from "@mantine/core";
import { useRouter } from "next/router";
import { Route, routes } from "../cfg/routes";
import Link from "next/link";
import { useDisclosure } from "@mantine/hooks";

export default function SDAHeader() {
  const HEADER_HEIGHT = 60;
  const router = useRouter();
  let currentRoute = undefined as Route | undefined;

  const navigation = routes.map((r) => {
    r.current = r.href === router.asPath;
    if (r.current) currentRoute = r;
    return r;
  });

  const [opened, { toggle, close }] = useDisclosure(false);

  const useStyles = createStyles((theme) => ({
    root: {
      position: "relative",
      zIndex: 1,
    },
    dropdown: {
      position: "absolute",
      top: HEADER_HEIGHT,
      left: 0,
      right: 0,
      zIndex: 0,
      borderTopRightRadius: 0,
      borderTopLeftRadius: 0,
      borderTopWidth: 0,
      overflow: "hidden",

      [theme.fn.largerThan("sm")]: {
        display: "none",
      },
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: "100%",
    },
    links: {
      [theme.fn.smallerThan("sm")]: {
        display: "none",
      },
    },
    burger: {
      [theme.fn.largerThan("sm")]: {
        display: "none",
      },
    },
    link: {
      display: "block",
      lineHeight: 1,
      padding: "8px 12px",
      textDecoration: "none",
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[0]
          : theme.colors.gray[7],
      fontSize: theme.fontSizes.lg,
      fontWeight: 500,

      "&:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
      },

      [theme.fn.smallerThan("sm")]: {
        borderRadius: 0,
        padding: theme.spacing.md,
      },
    },

    linkActive: {
      "&, &:hover": {
        backgroundColor: theme.fn.variant({
          variant: "light",
          color: theme.primaryColor,
        }).background,
        color: theme.fn.variant({
          variant: "light",
          color: theme.primaryColor,
        }).color,
      },
    },
  }));

  const { classes, cx } = useStyles();

  const links = navigation.map((r) => (
    <Link
      href={r.href}
      key={r.href}
      className={cx(classes.link, {
        [classes.linkActive]: r.current,
      })}
      onClick={close}
    >
      {r.name}
    </Link>
  ));

  return (
    <MantineHeader height={HEADER_HEIGHT} className={classes.root}>
      <Container className={classes.header}>
        <Flex align="center" justify="start" gap="sm" my="sm" h={HEADER_HEIGHT}>
          <Image src="/sda-logo.svg" alt="" height={50} width={50} />
          <Title order={2}>SDA Template</Title>
        </Flex>

        <Group className={classes.links}>{links}</Group>

        <Burger
          opened={opened}
          onClick={toggle}
          size="lg"
          className={classes.burger}
        ></Burger>

        <Transition transition="pop-top-right" mounted={opened} duration={200}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {links}
            </Paper>
          )}
        </Transition>
      </Container>
    </MantineHeader>
  );
}
