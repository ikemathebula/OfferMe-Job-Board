import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#66b899",
        color: "white",
        padding: "20px 0",
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h6">OfferME-JOB-BOARD</Typography>
        <Typography variant="subtitle1">
          Linda&Ike Copyright © 2023. All Rights Reserved
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
