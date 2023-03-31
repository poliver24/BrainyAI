import React from "react";
import { Container, Box } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <Container
      maxWidth="md"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#F5F5F5",
      }}>
      <Box
        sx={{
          width: "100%",
          minHeight: "80vh",
          background: "white",
          borderRadius: 1,
          boxShadow: 1,
          padding: 2,
        }}>
        {children}
      </Box>
    </Container>
  );
};

export default Layout;
