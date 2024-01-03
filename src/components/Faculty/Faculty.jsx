import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import dummyPic from "../../assets/images/dummyPic.svg";

function Faculty() {
  return (
    <Box width={"100%"} height={"900px"} bgcolor={"#FAFAFC"} py={20} px={12}>
      <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={12} sm={12} md={6}>
          <Typography fontSize={"48px"} fontWeight={400} pb={3}>
            You're in a good company
          </Typography>
          <Typography fontSize={"36px"} fontWeight={400} color={"#000000CC"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Card sx={{ bgcolor: "#fff", maxWidth: "660px" }} elevation={0}>
            <CardMedia
              component="img"
              height="400px"
              image={dummyPic}
              alt="Paella dish"
            />
            <CardContent sx={{ p: 8 }}>
              <Typography variant="h5" fontWeight={700}>
                Sed ut perspiciatis unde omnis
              </Typography>
              <Typography variant="body1" fontWeight={400} pt={3}>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Faculty;
