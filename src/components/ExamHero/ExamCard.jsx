import { Avatar, Card, CardContent, Typography } from "@mui/material";
import React from "react";

function ExamCard({ data }) {
  return (
    <Card
      sx={{
        minWidth: data.width,
        maxWidth: data.width,
        height: data.height,
        borderRadius: "2px",
        bgcolor: data.bgcolor,
        pl: 3,
        pb: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start",
        boxShadow: data.elevation,
      }}
    >
      <CardContent>
        <Avatar
          sx={{ width: "76px", height: "76px", mb: 4 }}
          alt=""
          src={data.image}
        />
        <Typography variant="h5" fontWeight={700} pb={2}>
          {data.title}
        </Typography>
        <Typography variant="body2" color={"#33333380"}>
          {data.desc}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ExamCard;
