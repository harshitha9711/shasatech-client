import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

function MainLayout() {
  return (
    <>
      <Navbar />

      <Outlet />

      <Footer />

      <WhatsAppButton />
    </>
  );
}

export default MainLayout;