/*function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary text-white text-3xl font-bold">
      Tailwind CSS is working!
    </div>
  )
}

export default App*/

import Navbar from "./components/Navbar"
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

export default App;
