import { ThemeProvider } from "@mui/material";
import Books from "./containers/Books";
import theme from "./styles/theme";

function App () {
  return (
    <ThemeProvider theme={theme}>
      <Books />
    </ThemeProvider>
  );
}

export default App;
