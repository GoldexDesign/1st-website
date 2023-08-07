import React from "react";
import "./App.css";
import { Container, Typography } from "@mui/material";
import { styled } from "@mui/system";
import zreactImage from "./images/Boyfight.jpg";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ResponsiveAppBar from "./components/scripts/ResponsiveAppBar";
import TopComponenet from "./components/pages/TopComponenet";
import { useState } from "react";
import HomePage from "./components/pages/HomePage";
import Products from "./components/pages/Products";
import Contact from "./components/pages/Contact";
import validCodes from "./components/scripts/ValidCodes";
import codeStories from "./components/scripts/CodeStories";
import Code from "./components/pages/Code";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#131414",
      darker: "#053e85",
    },
    neutral: {
      main: "#101011",
      contrastText: "#fff",
    },
  },
});

const HeaderContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(25),
  paddingBottom: theme.spacing(0),
  backgroundImage: `url(${zreactImage})`,
  backgroundSize: "cover",
  backgroundPosition: "top",
  position: "relative",
}));

const TransparentAppBar = styled(ResponsiveAppBar)(({ theme }) => ({
  "& .MuiToolbar-root": {
    backgroundColor: "transparent",
    borderBottom: "none",
    boxShadow: "none", // Add this line to remove any box shadow
  },
  backgroundColor: "transparent", // Add this line to set the background color of the app bar itself to transparent
}));

const ContentContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  paddingBottom: "calc(2rem + 40px)", // Adjust the height based on your needs
  minHeight: "60vh",
}));

const FooterContainer = styled(Container)(({ theme }) => ({
  textAlign: "center",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(0),
  position: "relative",
  bottom: 0,
  left: 0,
  width: "100%",
  zIndex: 100,
}));

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const handlePageChange = (page) => {
    setCurrentPage(page.toLowerCase()); // Update the state with the lowercase value of the clicked page
  };

  const renderPage = () => {
    if (currentPage === "home") {
      return <HomePage />;
    } else if (currentPage === "products") {
      return <Products />;
    } else if (currentPage === "contact") {
      return <Contact />;
    } else if (currentPage === "code") {
      return (
        <Container>
          <Code codeList={validCodes} codeStories={codeStories} />
        </Container>
      );
    } else {
      return null;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <HeaderContainer>
        <TopComponenet />
        <TransparentAppBar onPageChange={handlePageChange} />
      </HeaderContainer>
      <ContentContainer>
        {renderPage()} {/* Render the current page */}
      </ContentContainer>
      <FooterContainer>
        <Container
          maxWidth="xl"
          sx={{
            textAlign: "center",
            backgroundColor: "#131414",
            color: "#fff",
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="body2" color="inherit">
            &copy; {new Date().getFullYear()} Your Natural Supplements Store.
            All rights reserved.
          </Typography>
          <Typography variant="body2" color="inherit">
            Website designed and developed by Your Company Name.
          </Typography>
        </Container>
      </FooterContainer>
    </ThemeProvider>
  );
};

export default App;
