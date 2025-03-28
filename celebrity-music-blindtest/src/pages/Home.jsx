import { Button, Container, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { loginSpotify, isLogged, getUserData } from "../services/SpotifyService";

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (isLogged()) {
      getUserData().then(setUser);
    }
  }, []);

  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h4">Bienvenue sur Blindtest Spotify</Typography>
      {user ? (
        <Typography variant="h6">Connecté en tant que {user.display_name}</Typography>
      ) : (
        <Button variant="contained" color="primary" onClick={loginSpotify} sx={{ mt: 2 }}>
          Se connecter avec Spotify
        </Button>
      )}
    </Container>
  );
}
