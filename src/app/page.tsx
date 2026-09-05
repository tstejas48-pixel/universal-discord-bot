import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import CommandsSection from "@/components/CommandsSection";
import SetupSection from "@/components/SetupSection";
import CodeSection from "@/components/CodeSection";
import VoteSection from "@/components/VoteSection";
import FeedbackSection from "@/components/FeedbackSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <CommandsSection />
      <SetupSection />
      <CodeSection />
      <VoteSection />
      <FeedbackSection />
      <Footer />
    </main>
  );
}
