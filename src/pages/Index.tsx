import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import Featured from "@/components/Featured";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>VASTRA - Redefine Your Style Revolution | Premium Fashion</title>
        <meta
          name="description"
          content="Discover VASTRA's avant-garde collection where high fashion meets street culture. Premium, sustainable fashion designed in India, worn worldwide."
        />
        <meta
          name="keywords"
          content="fashion, luxury fashion, sustainable fashion, Indian fashion, designer clothing, premium apparel"
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <Collections />
          <Featured />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Index;
