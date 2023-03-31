import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const LandingPage = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (searchQuery) => {
    // Call OpenAI API with the searchQuery to generate the lesson plan
    console.log("Search Query: ", searchQuery);
    };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}>
      <Typography variant="h3" gutterBottom>
        BrainyAI
      </Typography>
      <Typography variant="h5" gutterBottom>
        Empower Your Mind with AI
      </Typography>
      <Box mt={4} width="100%">
        <TextField
          fullWidth
          variant="outlined"
          label="Teach me how to..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSearch}
          sx={{ mt: 2 }}>
          Search
        </Button>
      </Box>
    </Box>
  );
};

export default LandingPage;
