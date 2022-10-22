import { Box, Stack } from "@mui/system";
import React from "react";
import { VideoCard, ChannelCard } from "./";
export default function Videos({ videos }) {
  if (!videos?.length) return "loading...";
  return (
    <Stack
      flexDirection="row"
      flexWrap="wrap"
      gap={2}
      justifyContent="flex-start"
    >
      {videos?.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
}
