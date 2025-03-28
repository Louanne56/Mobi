import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Blindtest Spotify
        </Typography>
        <Button color="inherit" onClick={() => navigate("/")}>
          Accueil
        </Button>
        <Button color="inherit" onClick={() => navigate("/game")}>
          Game
        </Button>
      </Toolbar>
    </AppBar>
  );
}
