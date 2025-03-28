import { Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchWebApi } from "../services/SpotifyService";
import SongCard from "../components/SongCard";

export default function Game() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    async function fetchTracks() {
      const response = await fetchWebApi("v1/me/top/tracks?limit=10", "GET");
      setTracks(response.items || []);
    }
    fetchTracks();
  }, []);

  return (
    <Container>
      <Typography variant="h4" textAlign="center" marginY={4}>
        Devinez la chanson !
      </Typography>
      {tracks.map((track) => (
        <SongCard key={track.id} track={track} />
      ))}
    </Container>
  );
}
