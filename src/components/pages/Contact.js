import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Contact Us
      </Typography>
      <Box mt={4}>
        <Typography variant="h6" gutterBottom>
          Have a question or need assistance? Contact us using the form below.
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box mt={2}>
            <TextField label="Name" variant="outlined" fullWidth required />
          </Box>
          <Box mt={2}>
            <TextField label="Email" variant="outlined" fullWidth required />
          </Box>
          <Box mt={2}>
            <TextField
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              required
            />
          </Box>
          <Box mt={2} display="flex" justifyContent="center">
            <Button variant="contained" type="submit" color="primary">
              Send Message
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default ContactPage;
