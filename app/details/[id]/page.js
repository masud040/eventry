import EventDetails from "@/app/components/details/EventDetails";
import EventVenue from "@/app/components/details/EventVenue";
import HeroSection from "@/app/components/details/HeroSection";
import { getEventById } from "@/db/queries";

export default async function EventDetailsPage({ params: { id } }) {
  const eventData = await getEventById(id);

  return (
    <>
      <HeroSection eventData={eventData} />
      <section class="container">
        <div class="grid grid-cols-5 gap-12 my-12">
          <EventDetails details={eventData?.details} swags={eventData?.swags} />
          <EventVenue location={eventData.location} />
        </div>
      </section>
    </>
  );
}
