import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme"; // Importation du thème
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Login from "./pages/Login";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Normalise les styles */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
