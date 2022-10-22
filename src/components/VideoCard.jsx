import { CheckCircle } from "@mui/icons-material";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/content";

export default function VideoCard({
  video: {
    id: { videoId },
    snippet,
  },
}) {
  return (
    <Card
      sx={{
        width: {
          xl: "22vw",
          lg: "20vw",
          md: "24vw",
          sm: "46.1vw",
          xs: "94  vw",
        },
        border: "none",
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : `${demoVideoUrl}`}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          sx={{
            width: { lg: "100%", md: "100%", xs: "94vw", sm: "100%" },
            height: 180,
          }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1E1E1E", height: "106px" }}>
        <Link to={videoId ? `/video/${videoId}` : `${demoVideoUrl}`}>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            sx={{ color: "#fff" }}
          >
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : `${demoChannelUrl}`
          }
        >
          <Typography
            variant="subtitle2"
            fontWeight="bold"
            sx={{ color: "grey" }}
          >
            {snippet?.channelTitle.slice(0, 60) ||
              demoChannelTitle.slice(0, 60)}
            <CheckCircle
              sx={{
                fontSize: 16,
                fontWeight: 300,
                width: "0.7em",
                color: "gray",
                ml: "5px",
              }}
            />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}
