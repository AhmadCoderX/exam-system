import { Box, Button, List, ListItem, Typography } from "@mui/material";
import React from "react";
import logoDots from "../../assets/images/Group 5.1.svg";
import { NavLink } from "react-router-dom";

const listItems = [
  { name: "Home", selected: true, isButton: false, path: "/" },
  { name: "About", selected: true, isButton: false, path: "/about" },
  { name: "Resources", selected: true, isButton: false, path: "resources" },
  { name: "Contact", selected: true, isButton: false, path: "/contact" },
  {
    name: "Login",
    selected: true,
    isButton: true,
    btnBgColor: null,
    btnTextColor: "#5D5A88",
    variant: "outlined",
    path: "/login",
  },
  {
    name: "Get Started",
    selected: true,
    isButton: true,
    btnBgColor: "#4A3AFF",
    btnTextColor: "#fff",
    variant: "contained",
    path: "/register",
  },
];

function Header() {
  return (
    <Box
      height={"120px"}
      width={"90%"}
      bgcolor={"#fff"}
      display={"flex"}
      justifyContent={"space-between"}
      mx={"auto"}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent={"space-between"}
        width={"140px"}
      >
        <img src={logoDots} alt="" width="35px" height="35px" />
        <Typography variant="h3" fontWeight={700} color={"#4A3AFF"}>
          logo
        </Typography>
      </Box>

      <List
        sx={{
          display: "flex",
          color: "#5D5A88",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {listItems.map((item) => {
          return (
            <NavLink
              to={item.path}
              style={({ isActive }) => ({
                textDecoration: "none",
                color: "#5D5A88",
                borderBottom: isActive ? "4px solid #4A3AFF" : "",
                paddingBottom: 8,
                textAlign: "center",
              })}
            >
              <ListItem sx={{ width: "fit-content" }}>
                {item.isButton ? (
                  <Button
                    variant={item.variant}
                    sx={{ color: item.btnTextColor, bgcolor: item.btnBgColor }}
                    disableElevation
                  >
                    {item.name}
                  </Button>
                ) : (
                  <Typography
                    fontSize={"18px"}
                    fontWeight={400}
                    lineHeight={"18px"}
                  >
                    {item.name}
                  </Typography>
                )}
              </ListItem>
            </NavLink>
          );
        })}
      </List>
    </Box>
  );
}

export default Header;
