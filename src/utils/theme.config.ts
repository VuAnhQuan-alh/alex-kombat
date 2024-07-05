import { extendTheme } from "@chakra-ui/react";

export const themeConfig = extendTheme({
  components: {
    Progress: {
      baseStyle: {
        filledTrack: {
          bg: "linear-gradient(to right, #FDBD33, #E47C10)",
        },
      },
    },
  },
});
