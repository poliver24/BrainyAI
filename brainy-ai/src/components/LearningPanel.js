import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import axios from "axios";

const CodingConsole = () => {
    const [code, setCode] = useState("");
    const [feedback, setFeedback] = useState("");
    const [output, setOutput] = useState("");
    const [error, setError] = useState("");
    const [lesson, setLesson] = useState(null);
    const [progress, setProgress] = useState(0);

  const fetchCourse = async (lessonIndex) => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/course/");
      setLesson(response.data[lessonIndex]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCourse(0);
  }, []);

  const handleNextLesson = () => {
    if (code.trim() === lesson.solution.trim()) {
      setError("");
      setFeedback("Correct! Moving to the next lesson.");
      const newProgress = progress + 1;
      setProgress(newProgress);
      fetchCourse(newProgress);
    } else {
      setError("Your solution is incorrect. Please try again.");
      setFeedback("");
    }
  };

  const handleCodeChange = (newValue) => {
    setCode(newValue);
  };

  const handleRunCode = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/run-code/", {
        code,
      });
      setFeedback(response.data.feedback);
      setOutput(response.data.output);
      setError(response.data.error);
    } catch (error) {
      console.error(error);
      setFeedback("An error occurred while processing your code.");
    }
  };

    return (
        <Typography variant="h4" gutterBottom>
            BrainyAI
            </Typography>
            {lesson && (
            <>
                <Typography variant="h5" gutterBottom>
                {lesson.title}
                </Typography>
                <Typography variant="body1" gutterBottom>
                {lesson.task}
                </Typography>
            </>
            )}
            <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <AceEditor
                mode="python"
                theme="monokai"
                value={code}
                onChange={handleCodeChange}
                name="code-editor"
                editorProps={{ $blockScrolling: true }}
                width="100%"
                height="400px"
                />
                <Box mt={2}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleRunCode}>
                    Run Code
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleNextLesson}
                    sx={{ marginLeft: 1 }}>
                    Next Lesson
                </Button>
                </Box>
                <Typography variant="h6" gutterBottom>
                Feedback
                </Typography>
                <Typography variant="body1">{feedback}</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                Output
                </Typography>
                <Box
                component="pre"
                sx={{
                    border: "1px solid",
                    borderColor: "divider",
                    borderRadius: 1,
                    p: 1,
                    maxHeight: "400px",
                    overflow: "auto",
                    whiteSpace: "pre-wrap",
                }}>
                <Typography component="span" color="text.primary">
                    {output}
                </Typography>
                {error && (
                    <Typography component="span" color="error.main">
                    {error}
                    </Typography>
                )}
                </Box>
            </Grid>
            </Grid>
    )
}

export default CodingConsole;