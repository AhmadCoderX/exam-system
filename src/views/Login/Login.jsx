import {
  Box,
  Card,
  CardContent,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import GoogleIcon from "../../assets/images/Google logo.svg";

const theme = createTheme({
  palette: {
    grey: {
      main: "#8E8383",
      light: "#FAFAFC",
      dark: "##555454",
    },
    btn: {
      main: "#4A3AFF",
      light: "5c4eff",
      dark: "4334e6",
    },
  },
});

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <ThemeProvider theme={theme}>
      <Box
        width="100vw"
        height="100vh"
        bgcolor="#FAFAFC"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Card
          sx={{
            maxWidth: "580px",
            minHeight: "670px",
            display: "flex",
            flexDirection: "column",
            px: 12,
            py: 6,
            textAlign: "center",
          }}
          elevation={10}
        >
          <CardContent>
            <Typography fontSize={"37px"} fontWeight={700} pb={2}>
              Lets Sign you in
            </Typography>
            <Typography fontSize="28px" fontWeight={400} pb={3}>
              Welcome back,
              <br />
              You have been missed
            </Typography>
            <Box component="form">
              <FormControl
                sx={{ my: 1, height: "50px" }}
                variant="outlined"
                required
                color="grey"
                fullWidth
              >
                <InputLabel>Email ,phone & username</InputLabel>
                <OutlinedInput type="text" label="Email ,phone & username" />
              </FormControl>
              <FormControl
                sx={{ my: 1, height: "50px" }}
                variant="outlined"
                required
                color="grey"
                fullWidth
              >
                <InputLabel>Password</InputLabel>
                <OutlinedInput
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton onClick={handleClickShowPassword} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <Link
                to="/forgot-password"
                style={{
                  textDecoration: "none",
                  fontWeight: 400,
                  fontSize: "15px",
                  color: "#000000",
                  width: "98%",
                }}
              >
                <Typography textAlign="right" pr={2} pt={1}>
                  Forgot Password?
                </Typography>
              </Link>
              <Button
                fullWidth
                variant="filled"
                sx={{
                  bgcolor: "#4A3AFF",
                  color: "#fff",
                  "&:hover": {
                    bgcolor: "#5c4eff",
                    color: "#fff",
                  },
                  height: "50px",
                  my: 3,
                }}
                // onClick={handleSubmit}
              >
                Sign In
              </Button>
              <Typography pb={2}>_______________ or _______________</Typography>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  px: 13,
                  pb: 5,
                }}
              >
                <img
                  src={GoogleIcon}
                  alt=""
                  style={{ width: "23px", height: "23px" }}
                />
                <img
                  src={GoogleIcon}
                  alt=""
                  style={{ width: "23px", height: "23px" }}
                />
                <img
                  src={GoogleIcon}
                  alt=""
                  style={{ width: "23px", height: "23px" }}
                />
              </Box>
              <Box fontSize="16px" display="flex" justifyContent="center">
                <Typography
                  fontWeight={400}
                  color="#555454"
                  lineHeight="20.16px"
                >
                  Don't have an account?
                  <Link
                    to="/register"
                    style={{
                      textDecoration: "none",
                      fontWeight: 700,
                      color: "#000000",
                      marginLeft: 4,
                      lineHeight: "20.16px",
                    }}
                  >
                    Register Here
                  </Link>
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </ThemeProvider>
  );
};

export default Login;
