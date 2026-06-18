import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Services from "../pages/Services";
import Portfolio from "../pages/Portfolio";
import About from "../pages/About";
import Contact from "../pages/Contact";

import WebsiteDevelopment from "../pages/services/WebsiteDevelopment";
import MobileApps from "../pages/services/MobileApps";
import AIAndRobotics from "../pages/services/AIAndRobotics";
import CustomSoftware from "../pages/services/CustomSoftware";
import SchoolManagement from "../pages/services/SchoolManagement";


import MainLayout from "../layouts/MainLayout";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />

        <Route path="services" element={<Services />} />

        <Route
          path="services/website-development"
          element={<WebsiteDevelopment />}
        />

        <Route
          path="services/mobile-app-development"
          element={<MobileApps />}
        />

 <Route
  path="services/ai-robotics"
  element={<AIAndRobotics />}
/>

        <Route
          path="services/custom-software"
          element={<CustomSoftware />}
        />

        <Route
          path="services/school-management"
          element={<SchoolManagement />}
        />

       

        <Route path="portfolio" element={<Portfolio />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;