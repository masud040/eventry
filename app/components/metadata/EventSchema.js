export default function EventSchema({ event }) {
  const eventName = encodeURIComponent(event?.name);
  const formatData = {
    "@context": "https://schema.org",
    "@type": "EducationEvent",
    name: eventName,
    startDate: new Date(),
    endDate: new Date(),
    description: eventName?.details,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: event?.location,
    },
    impage: [event?.imageUrl],
    organizer: {
      "@type": "Organization",
      name: "Masud Rana",
      url: "https://learnwithsumit.com",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(formatData),
      }}
    />
  );
}
