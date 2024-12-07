import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { MeetTheArtist } from "@/components/MeetTheArtist";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="space-y-20 pb-20">
      <Hero />
      <Projects />
      <MeetTheArtist />
      <About />
      <Contact />
    </div>
  );
};

export default Index;