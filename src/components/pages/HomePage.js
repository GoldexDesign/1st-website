import React from "react";
import { Typography } from "@mui/material";

const HomePage = () => {
  return (
    <div>
      <Typography variant="h2" component="h1" align="center" gutterBottom>
        Welcome to our Natural Supplements Store!
      </Typography>
      <Typography variant="body1" align="left" gutterBottom>
        Providing quality natural supplements for optimal health for over 15
        years.
      </Typography>
      <Typography variant="body1" align="left" gutterBottom>
        At our store, we believe in the power of nature to support and enhance
        your well-being. We offer a wide range of carefully selected natural
        supplements to help you achieve your health goals and maintain a
        balanced lifestyle.
      </Typography>
      <Typography variant="body1" align="left" gutterBottom>
        Our commitment to quality and customer satisfaction sets us apart. All
        our products are sourced from trusted suppliers and undergo rigorous
        testing to ensure purity, potency, and safety.
      </Typography>
      <Typography variant="body1" align="left">
        Whether you're looking to boost your immune system, improve your
        digestion, enhance your energy levels, or address specific health
        concerns, we have the right supplements for you.
      </Typography>
    </div>
  );
};

export default HomePage;
