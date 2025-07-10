import NavBar from "@/components/common/navbar";
import Hero from "@/components/home/hero";
import Mission from "@/components/home/mission";
import Stat from "@/components/home/stats";
import AdjectiveLoop from "@/components/home/adjective-loop";
import UpcomingEvents from "@/components/home/upcoming-events";
import GetInvolved from "@/components/home/connect";
import Footer from "@/components/common/footer";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Mission />
      <Stat />
      <UpcomingEvents />
      <AdjectiveLoop />
      <GetInvolved />
      <Footer />
    </div>
  );
}
