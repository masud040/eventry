import EventDetail from "@/app/components/details/EventDetails";
import EventVenue from "@/app/components/details/EventVenue";
import HeroSection from "@/app/components/details/HeroSection";

export default function EventDetailsPage() {
  return (
    <>
      <HeroSection />
      <section class="container">
        <div class="grid grid-cols-5 gap-12 my-12">
          <EventDetail />
          <EventVenue />
        </div>
      </section>
    </>
  );
}
