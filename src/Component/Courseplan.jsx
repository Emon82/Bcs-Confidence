import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
  Box,
} from "@mui/material";

const Courseplan = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ marginTop: "50px", overflowX: "auto" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="course plan table">
            <TableHead>
              <TableRow>
                <TableCell>বিষয়</TableCell>
                <TableCell>নাম্বার</TableCell>
                <TableCell>ক্লাস সংখ্যা</TableCell>
                <TableCell>ক্লাস টেস্ট</TableCell>
                <TableCell>লেকচার শিট</TableCell>
                <TableCell>এসাইনমেন্ট টেস্ট</TableCell>
                <TableCell>বিসয়ভিওিক টেস্ট</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[
                {
                  subject: "বাংলা ভাষা",
                  number: 15,
                  classes: "০৮ টি",
                  classTest: "১০ টি",
                  lectureSheet: "১০ টি",
                  assignment: "১ টি",
                  subjectTest: "১ টি",
                },
                {
                  subject: "বাংলা সাহিত্য",
                  number: 20,
                  classes: "১১ টি",
                  classTest: "১১ টি",
                  lectureSheet: "১১ টি",
                  assignment: "১ টি",
                  subjectTest: "১ টি",
                },
                {
                  subject: "English Language",
                  number: 20,
                  classes: "২৩ টি",
                  classTest: "১৭ টি",
                  lectureSheet: "১৭ টি",
                  assignment: "১ টি",
                  subjectTest: "১ টি",
                },
                {
                  subject: "English Literature",
                  number: 15,
                  classes: "০৭ টি",
                  classTest: "০৭ টি",
                  lectureSheet: "০৭ টি",
                  assignment: "১ টি",
                  subjectTest: "১ টি",
                },
                {
                  subject: "বাংলাদেশ বিষয়াবলি",
                  number: 30,
                  classes: "২০ টি",
                  classTest: "১৬ টি",
                  lectureSheet: "১৬ টি",
                  assignment: "২ টি",
                  subjectTest: "১ টি",
                },
                {
                  subject: "আন্তর্জাতিক বিষয়াবলি",
                  number: 20,
                  classes: "১৩ টি",
                  classTest: "১৩ টি",
                  lectureSheet: "১৩ টি",
                  assignment: "১ টি",
                  subjectTest: "১ টি",
                },
                {
                  subject:
                    "ভূগোল (বাংলাদেশ ও বিশ্ব),পরিবেশ ও দুর্যোগ ব্যবস্তাপনা",
                  number: 10,
                  classes: "০৭ টি",
                  classTest: "০৭ টি",
                  lectureSheet: "০৭ টি",
                  assignment: "১ টি",
                  subjectTest: "১ টি",
                },
                {
                  subject: "সাধারন বিজ্ঞান",
                  number: 15,
                  classes: "১২ টি",
                  classTest: "১২ টি",
                  lectureSheet: "১২ টি",
                  assignment: "১ টি",
                  subjectTest: "১ টি",
                },
                {
                  subject: "কম্পিউটার ও তথ্য প্রযুক্তি",
                  number: 15,
                  classes: "০৮ টি",
                  classTest: "০৮ টি",
                  lectureSheet: "০৮ টি",
                  assignment: "১ টি",
                  subjectTest: "১ টি",
                },
                {
                  subject: "গাণিতিক যুক্তি",
                  number: 15,
                  classes: "২৪ টি",
                  classTest: "২৪ টি",
                  lectureSheet: "২১ টি",
                  assignment: "১ টি",
                  subjectTest: "১ টি",
                },
                {
                  subject: "মানসিক দক্ষতা",
                  number: 15,
                  classes: "০৬ টি",
                  classTest: "০৬ টি",
                  lectureSheet: "০৬ টি",
                  assignment: "- টি",
                  subjectTest: "১ টি",
                },
                {
                  subject: "নৈতিকতা, মূল্যবোধ ও সু-শাসন",
                  number: 10,
                  classes: "০৪ টি",
                  classTest: "০৪ টি",
                  lectureSheet: "০৪ টি",
                  assignment: "১ টি",
                  subjectTest: "১ টি",
                },
                {
                  subject: "মোট ঃ",
                  number: 200,
                  classes: "১৩৪ টি",
                  classTest: "১৩০ টি",
                  lectureSheet: "১৩৪ টি",
                  assignment: "১২ টি",
                  subjectTest: "১২ টি",
                },
              ].map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.subject}</TableCell>
                  <TableCell>{row.number}</TableCell>
                  <TableCell>{row.classes}</TableCell>
                  <TableCell>{row.classTest}</TableCell>
                  <TableCell>{row.lectureSheet}</TableCell>
                  <TableCell>{row.assignment}</TableCell>
                  <TableCell>{row.subjectTest}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default Courseplan;
