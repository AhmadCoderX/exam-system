import { Avatar, Box, Button, Card, Grid, Typography } from "@mui/material";
import React from "react";
import ExamCard from "./ExamCard";
import mathOval from "../../assets/images/mathOval.svg";
import englishOval from "../../assets/images/englishOval.svg";
import physicsOval from "../../assets/images/physicsOval.svg";
import GKOval from "../../assets/images/GKOval.svg";

const classes = {
  mainBtn: {
    color: "#1D4645",
    borderColor: "#1D4645",
    "&:hover": {
      color: "#1D4645",
      borderColor: "#1D4645",
    },
  },
};

const exploreExamData = {
  math: {
    image: mathOval,
    title: "Math",
    desc: "Sky was cloudless and of a deep dark blue spectacle before us was indeed ",
    width: "470px",
    height: "340px",
    bgcolor: "#FFF2E6",
    elevation: 0,
  },
  science: {
    image: mathOval,
    title: "Science",
    desc: "Unorthographic life One day however a small line of blind text.",
    width: "270px",
    height: "340px",
    bgcolor: "#FFF",
    elevation: "box-shadow: 0px 24px 48px #0000000A",
  },
  english: {
    image: englishOval,
    title: "English",
    desc: "Even the all-powerful Pointing has no control about the blind texts.",
    width: "370px",
    height: "340px",
    bgcolor: "#FFF2E6",
    elevation: 0,
  },
  physics: {
    image: physicsOval,
    title: "Physics",
    desc: "Even the all-powerful Pointing has no control about the blind texts.",
    width: "270px",
    height: "300px",
    bgcolor: "#FFF2E6",
    elevation: 0,
  },
  gk: {
    image: GKOval,
    title: "General Knowledge",
    desc: "Even the all-powerful Pointing has no control about the blind texts.",
    width: "370px",
    height: "340px",
    bgcolor: "#fff",
    elevation: "box-shadow: 0px 24px 48px #0000000A",
  },
};

function ExploreExam() {
  return (
    <Box width={"100%"} height={"1230px"} bgcolor={"#fff"} p={16}>
      <Box
        width={"100%"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        pb={6}
      >
        <Typography variant="h2" fontWeight={700}>
          Explore Our Exam
        </Typography>
        <Button variant="outlined" size="large" sx={classes.mainBtn}>
          EXPLORE ALL
        </Button>
      </Box>
      <Grid container height={"85%"}>
        <Grid
          item
          container
          xs={12}
          sm={6}
          flexDirection="column"
          alignItems={"end"}
        >
          <Grid item p={3}>
            <ExamCard data={exploreExamData.math} />
          </Grid>
          <Grid item p={3}>
            <ExamCard data={exploreExamData.science} />
          </Grid>
        </Grid>
        <Grid
          item
          container
          xs={12}
          sm={6}
          flexDirection={"coulmn"}
          justifyContent={"start"}
        >
          <Grid item pt={12} px={3}>
            <ExamCard data={exploreExamData.english} />
          </Grid>
          <Grid item container spacing={3} px={3}>
            <Grid item>
              <ExamCard data={exploreExamData.physics} />
            </Grid>
            <Grid item>
              <ExamCard data={exploreExamData.gk} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ExploreExam;
