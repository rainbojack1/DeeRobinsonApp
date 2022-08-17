import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import UpcomingEvents from './pages/UpcomingEvents/UpcomingEvents';
import About from './pages/About/About';
import Books from './pages/Books/Books';
import Blog from './pages/Blog/Blog';
import ContactUs from './pages/ContactUs/ContactUs';
import Films from './pages/Films/Films';
import Music from './pages/Music/Music';
import Partners from './pages/Partners/Partners';
import PhotoGallery from './pages/PhotoGallery/PhotoGallery';
import Poetry from './pages/Poetry/Poetry';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
        <div className="wrapper">
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deerobinson" element={<Home />} />
            <Route path="/about-dee" element={<About />} />
            <Route path="/upcoming-events" element={<UpcomingEvents />} />
            <Route path="/books" element={<Books />} />
            <Route path="/films" element={<Films />} />
            <Route path="/music" element={<Music />} />
            <Route path="/poetry" element={<Poetry />} />
            <Route path="/photoGallery" element={<PhotoGallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/contact-us" element={<ContactUs />} />

            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </div>
        <Footer />
    </Router>
  );
}

export default App;
