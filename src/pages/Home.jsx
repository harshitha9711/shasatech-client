import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import WhyChooseUs from "../components/WhyChooseUs";
import Stats from "../components/Stats";
import PortfolioShowcase from "../components/PortfolioShowcase";
import ProcessSection from "../components/ProcessSection";
import TeamPreview from "../components/TeamPreview";
function Home() {
  return (
    <>
      <Hero />

      <Stats />


      <ServicesSection />

<PortfolioShowcase/>
<ProcessSection/>
<TeamPreview />
      <WhyChooseUs />
     

   
    </>
  );
}

export default Home;