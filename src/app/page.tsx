import Image from "next/image";
import React from 'react';
import Header from "@/components/header"; // Adjust the path as needed
import Hero from "@/components/hero";
import Footer from "@/components/footer";

const Home = () => {  
  return (
    <div>
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home; 


