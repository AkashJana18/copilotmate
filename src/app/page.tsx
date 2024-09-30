import Faq from "@/components/Home/FAQ";
import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";


export default function Home() {
  return (
    <div className="text-center">
      <Hero />
      <Features />
      {/* <Faq /> */}
    </div>
  );
}
