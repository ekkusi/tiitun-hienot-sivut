import { extendTheme } from "@chakra-ui/react";
import componentStyles from "../../componentStyles";
import fonts from "../../fonts";
import globalStyles from "../../globalStyles";

const theme = {
  styles: {
    global: globalStyles,
  },
  fonts: {
    ...fonts,
  },
  components: componentStyles,
  // components: {
  //   Heading: {
  //     baseStyle: {
  //       textTransform: "uppercase",
  //     },
  //   },
  // },
};
export default extendTheme(theme);
