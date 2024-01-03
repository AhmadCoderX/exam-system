import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import primaryExamImage from "../../assets/images/homeClipArt.svg";
import bankExamImage from "../../assets/images/clipArtMan.svg";
import ECATExamImage from "../../assets/images/clipArtTeacher.svg";
import ExploreExam from "./ExploreExam";

const cardListData = [
  {
    title: "Primary Exam",
    image: primaryExamImage,
    bgColor: "#DBEDF5",
    color: "#1D4645",
  },
  {
    title: "Bank Exam",
    image: bankExamImage,
    bgColor: "#102F2E",
    color: "#fff",
  },
  {
    title: "ECAT Exam",
    image: ECATExamImage,
    bgColor: "#FEF1E2",
    color: "#1D4645",
  },
];

function ExamHero() {
  return (
    <>
      <Box width={"100%"} height={"675px"} bgcolor={"#4A3AFF"} display={"flex"}>
        <Grid
          container
          alignItems={"center"}
          spacing={10}
          justifyContent={"center"}
        >
          {cardListData.map((card) => {
            return (
              <Grid item>
                <Card
                  sx={{
                    minWidth: "370px",
                    height: "410px",
                    bgcolor: card.bgColor,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Avatar
                    alt=""
                    sx={{
                      width: "206px",
                      height: "206px",
                      position: "relative",
                      right: 0,
                    }}
                    src={card.image}
                  />
                  <CardContent sx={{ position: "relative", left: 0 }}>
                    <Typography
                      fontSize={"40px"}
                      fontWeight={700}
                      color={card.color}
                    >
                      {card.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <ExploreExam />
    </>
  );
}

export default ExamHero;
