import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos, ChannelCard } from "./";

export default function ChDetail() {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`channels?snippet&id=${id}`)
      .then((data) => setChannelDetail(data.items[0]))
      .catch((err) => console.log(err));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items))
      .catch((err) => console.log(err));
  }, [id]);
  console.log("channelDetail", channelDetail);
  return (
    <Box sx={{ minHeight: "95vh" }}>
      <Box>
        <div
          style={{
            background:
              "linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop={"-150px"} />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { md: "110px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
}
