import React, { useState, useEffect } from "react";
import { Grid, LinearProgress, Typography, Box, Card, CardContent } from "@mui/material";

const SecondView = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
    setProgress(0);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          handleSlideChange((activeIndex + 1) % data.length);
          return 0;
        }
        const increment = 10;
        return Math.min(prevProgress + increment, 100);
      });
    }, 500);

    return () => clearInterval(timer);
  }, [activeIndex, data.length]);

  return (
    <Grid container spacing={2} sx={{ minHeight: "100vh"}}>
      <Grid item xs={12} sx={{mt: 10}}>
        <Typography variant="h4" align="center" gutterBottom>
          What We Do Next
        </Typography>
      </Grid>
      <Grid container spacing={3}>
        {/* Left Panel Card */}
        <Grid item xs={12} md={4}>
          <Card sx={{ background: "#38383a", borderRadius: 1, ml: 4 }}>
            <CardContent>
              {data.map((slide, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Box
                    className={`panel-item ${activeIndex === index ? "active" : ""}`}
                    onClick={() => handleSlideChange(index)}
                    sx={{
                      padding: 2,
                      color: activeIndex === index ? "#000" : "#fff",
                      borderRadius: 1,
                      cursor: "pointer",
                      '&:hover': {
                        backgroundColor: activeIndex !== index ? "#4c4c4e" : undefined,
                      },
                    }}
                  >
                    {slide.title}
                  </Box>
                  {activeIndex === index && (
                    <LinearProgress
                      variant="determinate"
                      value={progress}
                      sx={{
                        height: 3,
                        borderRadius: 1,
                        mt: 1,
                      }}
                    />
                  )}
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>

        {/* Right Panel Card */}
        <Grid item xs={12} md={8}>
          <Card
            sx={{
              background: "#212529",
              color: "#fff",
              borderRadius: 1,
              padding: 2,
              marginRight: 4,
            }}
          >
            <CardContent>
              <Typography variant="body1" sx={{ fontSize: 18, lineHeight: 1.6 }}>
                {data[activeIndex].description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SecondView;
