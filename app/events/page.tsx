import EventsTitle from "@/components/events/title";
import Upcoming from "@/components/events/upcoming";
import EventDisplay from "@/components/events/event-display";

export default function Home() {
  return (
    <div>
      <EventsTitle />
      <EventDisplay />
      <Upcoming />
    </div>
  );
}
