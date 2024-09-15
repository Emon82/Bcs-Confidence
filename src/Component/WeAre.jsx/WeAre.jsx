import React from "react";
import {
  School,
  Article,
  Person,
  Work,
  Gavel,
  Security,
  EmojiPeople,
  HowToReg,
} from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";

// Icon mapping based on title
const iconMapping = {
  "BCS প্রিলিমিনারি": <School fontSize="large" />,
  "BCS লিখিত": <Article fontSize="large" />,
  "BCS ভাইভা": <Person fontSize="large" />,
  "প্রাথমিক শিক্ষক নিয়গ": <Work fontSize="large" />,
  "ব্যাংক জব": <Work fontSize="large" />,
  "সহকারী জজ নিয়োগ": <Gavel fontSize="large" />,
  "এসআই নিয়োগ": <Security fontSize="large" />,
  "শিক্ষক নিবন্ধন": <HowToReg fontSize="large" />,
};

export default function WeAre() {
  const weare = [
    { title: "BCS প্রিলিমিনারি" },
    { title: "BCS লিখিত" },
    { title: "BCS ভাইভা" },
    { title: "প্রাথমিক শিক্ষক নিয়গ" },
    { title: "ব্যাংক জব" },
    { title: "সহকারী জজ নিয়োগ" },
    { title: "এসআই নিয়োগ" },
    { title: "শিক্ষক নিবন্ধন" },
  ];

  return (
    <Container sx={{ marginTop: 5 }}>
      <Grid container spacing={3}>
        {weare.map(({ title }, key) => (
          <Grid item xs={12} sm={6} md={4} key={key}>
            <Card sx={{ borderRadius: "20px" }}>
              <CardContent
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 2,
                }}
              >
                <Box>{iconMapping[title] || <Person fontSize="large" />}</Box>
                <Typography variant="h6">{title}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
