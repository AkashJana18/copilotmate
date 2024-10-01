
import FAQ from "@/components/Home/Faq";
import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";


export default function Home() {
  return (
    <div className="text-center">
      <Hero />
      <Features />
      <FAQ />
    </div>
  );
}
