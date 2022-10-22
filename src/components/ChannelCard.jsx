import { CheckCircle } from "@mui/icons-material";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/content";

export default function ChennalCard({ channelDetail, marginTop }) {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: {
          xl: "22vw",
          lg: "20.2vw",
          md: "24vw",
          sm: "46.1vw",
          xs: "94vw",
        },
        height: "326px",
        margin: "auto",
        marginTop,
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet?.title}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              border: "1px solid #3e3e3e",
            }}
          />
          <Typography variant="h6">
            {channelDetail?.snippet?.title}
            <CheckCircle
              sx={{
                fontSize: 24,
                fontWeight: 300,
                width: "0.7em",
                color: "gray",
                ml: "5px",
              }}
            />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography variant="body1" sx={{fontSize:"12px"}}>
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString()}
              {"   "} SubScriber
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
}
