import React from "react";
import { Container, Typography } from "@mui/material";
import { styled } from "@mui/system";

const RootContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  marginLeft: 0, // Remove left margin
  paddingLeft: 0, // Remove left padding
}));

const Heading = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

function TopComponenet() {
  return (
    <RootContainer maxWidth="sm">
      <Heading
        variant="h2"
        component="h2"
        align="left" // Align heading to the left
        gutterBottom
        color="white"
      >
        This is my first Website !
      </Heading>
    </RootContainer>
  );
}

export default TopComponenet;
