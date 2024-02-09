import Header from "@/components/layouts/Header";
import Hero from "@/components/layouts/Hero";
import Menu from "@/components/layouts/Menu";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg_hero">
        <Header/>
        <Hero/> 
      </div>
      
      <Menu/>

      
    </>
   
    
  );
}
