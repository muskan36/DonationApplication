/*function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary text-white text-3xl font-bold">
      Tailwind CSS is working!
    </div>
  )
}

export default App*/

/*import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import OverviewCounter from "./components/OverviewCounter";
import OurVision from "./components/OurVision";
import Banner from "./components/Banner";
import Banner2 from "./components/Banner2";
import VideoBanner from "./components/VideoBanner";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";

const App = () => {
  return (
  <>
    <main className="overflow-x-hidden dark:bg-gray-900 bg-white">
      <Navbar />
      <Hero />
      <OverviewCounter />
      <OurVision />
      <Banner />
      <Banner2 />
      <VideoBanner />
      <Blogs />
      <Footer />
    </main>

  </>
  );
};

export default App;*/


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OurVision from "./components/OurVision";
import OverviewCounter from "./components/OverviewCounter";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Banner from "./components/Banner";
import Banner2 from "./components/Banner2";
import VideoBanner from "./components/VideoBanner";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import Vision from "./pages/Vision";
import Mission from "./pages/Mission";
import BlogDetail from './pages/BlogDetail';
import AboutUs from "./pages/AboutUs";
import ContactUs from './pages/ContactUs';
import OurServices from "./pages/OurServices"
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import TermsConditions from './pages/TermsConditions';
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Donation from "./pages/Donation";
import GettingStarted from "./pages/GettingStarted"

const App = () => {
  return (
    <Router>
      <main className="overflow-x-hidden dark:bg-gray-900 bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <OverviewCounter />
              <OurVision />
              <Banner />
              <Banner2 />
              <VideoBanner />
              <Blogs />
            </>
          } />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/started" element={<GettingStarted />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/donate" element={<Donation />} />
          <Route path="/services" element={<OurServices />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/refund" element={<RefundPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/mission" element={<Mission />} />
           <Route path="/blogs/all" element={<BlogDetail />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
};

export default App;
