import Hero from "@/components/home/hero";
import Mission from "@/components/home/mission";
import Stat from "@/components/home/stats";
import AdjectiveLoop from "@/components/home/adjective-loop";
import Events from "@/components/home/events";
import GetInvolved from "@/components/home/connect";

export default function Home() {
  return (
    <div>
      <Hero />
      <Mission />
      <Stat />
      <Events />
      <AdjectiveLoop />
      <GetInvolved />
    </div>
  );
}
