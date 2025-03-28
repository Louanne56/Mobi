import { Card, CardContent, Typography } from "@mui/material";

export default function SongCard({ track }) {
  return (
    <Card sx={{ margin: 2 }}>
      <CardContent>
        <Typography variant="h6">{track.name}</Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {track.artists.map((artist) => artist.name).join(", ")}
        </Typography>
      </CardContent>
    </Card>
  );
}
