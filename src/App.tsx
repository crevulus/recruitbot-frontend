import { ThemeProvider } from "styled-components";
import FAB from "./components/FAB/FAB";
import { theme } from "./theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <FAB />
      </ThemeProvider>
    </div>
  );
}

export default App;
