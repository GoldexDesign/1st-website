import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";

const CategoryContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[200],
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
  padding: theme.spacing(2),
  marginBottom: theme.spacing(4),
}));

const Products = () => {
  const categories = [
    { name: "Category 1", products: generateProducts(10) },
    { name: "Category 2", products: generateProducts(10) },
    { name: "Category 3", products: generateProducts(10) },
    { name: "Category 4", products: generateProducts(10) },
  ];

  // Helper function to generate random product prices
  function generateProducts(count) {
    const products = [];
    for (let i = 1; i <= count; i++) {
      const price = (Math.random() * (100 - 1) + 1).toFixed(2); // Generate a random price between 1 and 100
      products.push({ name: `Product ${i}`, price: price });
    }
    return products;
  }
  return (
    <Container>
      {categories.map((category, index) => (
        <CategoryContainer key={index} mt={4}>
          <Typography variant="h5" gutterBottom>
            {category.name}
          </Typography>
          <Box display="flex" flexWrap="wrap">
            {category.products.map((product, index) => (
              <Box key={index} width="25%" p={2}>
                <Typography variant="body1">{product.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  Price: €{product.price}
                </Typography>
              </Box>
            ))}
          </Box>
        </CategoryContainer>
      ))}
    </Container>
  );
};

export default Products;
