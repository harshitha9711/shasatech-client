import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import WhyChooseUs from "../components/WhyChooseUs";
import Stats from "../components/Stats";
import PortfolioShowcase from "../components/PortfolioShowcase";
import ProcessSection from "../components/ProcessSection";
function Home() {
  return (
    <>
      <Hero />

      <Stats />


      <ServicesSection />

<PortfolioShowcase/>
<ProcessSection/>
      <WhyChooseUs />

   
    </>
  );
}

export default Home;