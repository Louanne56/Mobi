import { Container, Typography, Button } from "@mui/material";
import { loginSpotify, isLogged } from "../services/SpotifyService";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged()) {
      navigate("/"); // Si l'utilisateur est connecté, on le redirige vers l'accueil
    }
  }, []);

  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h4">Connexion à Spotify</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Connectez-vous pour jouer au blindtest et accéder à vos musiques !
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={loginSpotify}
        sx={{ mt: 3 }}
      >
        Se connecter avec Spotify
      </Button>
    </Container>
  );
}
