import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Page/About Us/About";
import Branch from "./Page/Branch/Branch";
import Contact from "./Page/Contact/Contact";
import ExamPanel from "./Page/ExamPanel/ExamPanel";
import Home from "./Page/Home/Home";
import Rule from "./Page/Rule";
import Special from "./Page/Special";
import Course from "./Page/Courses/Course";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route index element={<Home />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/branches" element={<Branch />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/examportal" element={<ExamPanel />} />
        <Route path="/rules" element={<Rule />} />
        <Route path="/special" element={<Special />} />
        <Route path="/course" element={<Course />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
