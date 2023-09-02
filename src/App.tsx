import React from "react";
import Todos from "./components/Todos/Todos";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <h1>TODO App</h1>
        <div className="todosContainer">
          <Todos />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
