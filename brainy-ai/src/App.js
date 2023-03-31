import React, { useState, useEffect } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";
import { Box, Button, Container, Typography, Grid } from "@mui/material";
import axios from "axios";
import Layout from "./components/Layout";
import LandingPage from "./components/LandingPage";
import { Switch, Route, useHistory } from "react-router-dom";


function App() {

  return (
    <Layout>
      <Container>
        <LandingPage />
      </Container>
    </Layout>
  );
}

export default App;
