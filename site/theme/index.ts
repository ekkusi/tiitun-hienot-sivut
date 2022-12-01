import { extendTheme } from "@chakra-ui/react";
import colors from "./colors";
import {
  Button,
  Switch,
  Checkbox,
  Textarea,
  Input,
  Spinner,
  Tabs,
  Progress,
  Icon,
  Tag,
} from "./components";

const theme = extendTheme({
  fonts: {
    heading: "Oxygen",
    body: "Raleway",
  },
  styles: {
    global: () => ({
      "html, body, #root": {
        margin: 0,
        width: "100%",
        minHeight: "100vh",
        color: colors.text,
        bg: colors.bg,
        overflowX: "hidden",
      },
      body: {
        fontSize: { base: "md", md: "lg" },
      },
      p: {
        marginBottom: "2",
      },
      a: {
        color: colors.primary[500],
        _hover: {
          opacity: 0.7,
        },
        transition: "opacity 0.2s",
      },
      h1: {
        fontSize: { base: "4xl", md: "6xl" },
      },
      h2: {
        fontSize: { base: "2xl", md: "4xl" },
      },
      h3: {
        fontSize: { base: "xl", md: "2xl" },
      },
    }),
  },
  components: {
    Button,
    Switch,
    Checkbox,
    Input,
    Textarea,
    Spinner,
    Tabs,
    Progress,
    Icon,
    Tag,
  },
  colors: {
    ...colors,
  },
  shadows: {
    dark: "5px 5px 15px -5px black",
  },
});

export default theme;
