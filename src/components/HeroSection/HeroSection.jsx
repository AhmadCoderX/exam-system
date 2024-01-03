import { Box, Typography } from "@mui/material";
import React from "react";
import heroClipArt from "../../assets/images/homeClipArt.svg";

function HeroSection() {
  return (
    <Box
      width={"100%"}
      height={"75vh"}
      bgcolor={"#FAFAFC"}
      display={"flex"}
      alignItems={"center"}
    >
      <Box
        width={"80%"}
        height={"fit-content"}
        mx={"auto"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box>
          <Typography variant="h1" fontWeight={700}>
            Take Online <br /> Exam.
          </Typography>
          <Box>
            <Typography variant="h4">
              NUMBER OF ACTIVE USERS RIGHT NOW
            </Typography>
            <Typography variant="h3" fontWeight={700} color={"#4A3AFF"}>
              200+
            </Typography>
          </Box>
        </Box>
        <Box>
          <img src={heroClipArt} alt="" />
        </Box>
      </Box>
    </Box>
  );
}

export default HeroSection;
