import Head from "next/head";
import Box from "@mui/material/Box";
import Buttom from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@novatics/styles";

const theme = createTheme();

export default () => (
  <ThemeProvider theme={theme}>
    <Box className="container">
      <Head>
        <title>novatics-ui sandbox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Typography variant="h1">Novatics-UI sandbox</Typography>

        <Stack mt={10}>
          <Buttom variant="contained">Click me</Buttom>
        </Stack>
      </main>
    </Box>
  </ThemeProvider>
);
